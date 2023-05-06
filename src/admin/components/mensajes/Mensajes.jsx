import React, { useEffect } from 'react';
import DataTable from 'react-data-table-component';
import {
    FiChevronLeft,
    FiChevronRight,
    FiChevronsLeft,
    FiChevronsRight
} from 'react-icons/fi';
import { customStyles } from '../../../configuration/customStyles';
import DataTableExtensions from 'react-data-table-component-extensions';
import 'react-data-table-component-extensions/dist/index.css';
import { useColorModeValue, Box, Stack, HStack, Avatar, Text, IconButton } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ToastChakra } from '../../../helpers/toast';
import { Icon } from '@chakra-ui/icons';
import { Loading } from '../../../configuration/Loading';
import { MdDelete } from 'react-icons/md';
import { getAllMensajes, reset } from '../../../features/mensajeSlice';
import '../../../theme/solarizedTheme';
import DetallesMensaje from './DetallesMensaje';
import { AlertaEliminar } from './AlertEliminar';
import moment from 'moment';

const Mensajes = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const themeTable = useColorModeValue('default', 'solarized');
    const colorStatusActive = useColorModeValue('black', 'white');
	const colorStatusInactive = useColorModeValue('black', 'white');
    const backgroundColorActive = useColorModeValue('#DBDFEA', '#4a4a4a');

    const { user } = useSelector((state) => state.auth);

    const { mensajes, isLoading, isError, message } = useSelector((state) => state.mensajes);

    useEffect(() => {

        async function loadUsers() {
            try {

                if (!user) {
                    navigate("/login");
                }

                if (isError) {
                    ToastChakra('Error', message, 'error', 1500);
                    console.log(message);
                }

                dispatch(getAllMensajes())

                return () => {
                    dispatch(reset())
                }

            } catch (error) {
                console.log(error);
                ToastChakra('Error', error.message, 'error', 1500);
            }
        }

        loadUsers();

    }, [user, navigate, dispatch, isError, message]);

    const columns = [
        {
            name: 'USUARIO',
            selector: row => row.nombres_usuario,
            sortable: true,
            cellExport: row => row.nombres_usuario,
            cell: row => (
                <Stack spacing={2} direction={{ base: "column", lg: "row" }}>
                    <Avatar
                        size="sm"
                        name={row?.nombres_usuario}
                        fontWeight="bold"
                        fontSize="sm"
                        color="white"
                        alignSelf={'center'}
                        display={{
                            base: 'none',
                            lg: 'flex'
                        }}
                    />
                    <Text ml={2} alignSelf={'center'} fontSize="13px" noOfLines={1}>{row?.nombres_usuario}</Text>
                </Stack>
            )
        },
        {
            name: 'EMAIL',
            selector: row => row.email,
            sortable: true,
            cellExport: row => row.email,
            resizable: true
        },
        {
            name: 'TELEFONO',
            selector: row => row.telefono,
            sortable: true,
            cellExport: row => row.telefono,
            resizable: true
        },
        {
            name: 'FECHA ENVIO',
            selector: row => moment(row.createdAt).format('YYYY-MM-DD - H:mm:ss A'),
            sortable: true,
            cellExport: row => row.createdAt,
            center: true,
        },
        {
            name: 'ACCIONES',
            export: false,
            center: true,
            cell: row => (
                <div>
                    <DetallesMensaje row={row} />
                    <AlertaEliminar row={row} />
                </div>
            ),
            width: '200px'
        }
    ]

    const tableData = {
        columns: columns,
        data: mensajes,
    }

    if (isLoading) {
        return <Loading />
    }

    const conditionalRowStyles = [
		{
			when: row => row.leido === false,
			style: {
				color: colorStatusInactive,
				fontWeight: '800',
                backgroundColor: backgroundColorActive,
			},
		},
		{
			when: row => row.leido === true,
			style: {
				color: colorStatusActive,
			},
		},
	];


    return (
        <>
            <Box
                boxShadow="base"
                overflow="hidden"
                bg="white"
                _dark={{ bg: "primary.1000" }}
                mb={2}
            >
                <Stack direction="row" justifyContent="space-between" px={4} py={3}>
                    {/* <ModalAgregarUsuario /> */}
                    <HStack spacing={4} direction="row">
                        <IconButton isDisabled colorScheme="red" _dark={{ bg: "red.600", color: "white", _hover: { bg: "red.700" } }} aria-label='Eliminar' icon={<Icon as={MdDelete} fontSize="2xl" />} variant="solid" rounded="full" />
                    </HStack>
                </Stack>
            </Box>

            <Box
                overflow="hidden"
                boxShadow={'base'}
                bg="white"
                _dark={{ bg: "primary.1000" }}
                mt={2}
                pt={2}
            >
                <DataTableExtensions
                    {...tableData}
                    print={false}
                    exportHeaders={true}
                    filterPlaceholder="BUSCAR"
                    numberOfColumns={7}
                    zIndex={1000}
                    fileName={'MENSAJES' + new Date().toLocaleDateString()}
                >
                    <DataTable
                        progressPending={isLoading}
                        selectableRows
                        selectableRowsVisibleOnly
                        selectableRowsHighlight
                        defaultSortField="createdAt"
                        defaultSortAsc={false}
                        defaultSortOrder="desc"
                        pagination={true}
                        paginationIconFirstPage={< Icon as={FiChevronsLeft} boxSize={6} _dark={{ color: "gray.300" }} />}
                        paginationIconLastPage={< Icon as={FiChevronsRight} boxSize={6} _dark={{ color: "gray.300" }} />}
                        paginationIconPrevious={< Icon as={FiChevronLeft} boxSize={6} _dark={{ color: "gray.300", _hover: { color: "white" } }} />}
                        paginationIconNext={< Icon as={FiChevronRight} boxSize={6} _dark={{ color: "gray.300", _hover: { color: "white" } }} />}
                        paginationRowsPerPageOptions={[5, 10, 25, 50]}
                        paginationPerPage={10}
                        paginationCurrentPage={1}
                        paginationCurrentPageLabel={'Página 1'}
                        paginationComponentOptions={{
                            rowsPerPageText: 'Filas por pagina:',
                            rangeSeparatorText: 'de',
                            noRowsPerPage: false,
                            selectAllRowsItem: true,
                            selectAllRowsItemText: 'Todos',
                        }}
                        theme={themeTable}
                        customStyles={customStyles}
                        conditionalRowStyles={conditionalRowStyles}
                        pointerOnHover={true}
                        responsive={true}
                        noDataComponent={<Text mb={4} fontSize="lg">NO DATA FOUND</Text>}
                    />
                </DataTableExtensions>
            </Box>
        </>
    );
};

export default Mensajes;