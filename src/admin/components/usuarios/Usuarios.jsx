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
import { useColorModeValue, Box, Stack, HStack, Avatar, Badge, Text, IconButton } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers, reset } from '../../../features/userSlice';
import { ToastChakra } from '../../../helpers/toast';
import { AlertaEliminar } from './AlertEliminar';
import { ModalAgregarUsuario } from './ModalAgregarUsuario';
import { Icon } from '@chakra-ui/icons';
import { Loading } from '../../../configuration/Loading';
import { ModalEditarUsuario } from './ModalEditarUsuario';
import { MdDelete } from 'react-icons/md';
import '../../../theme/solarizedTheme';
import { PacmanLoader  } from 'react-spinners';

const Usuarios = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const themeTable = useColorModeValue('default', 'solarized');

  const { user } = useSelector((state) => state.auth);

  const { users, isLoading, isError, message } = useSelector((state) => state.users);

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

        dispatch(getAllUsers())

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
      name: 'NOMBRES',
      selector: row => row.name,
      sortable: true,
      cellExport: row => row.name,
      cell: row => (
        <Stack spacing={2} direction={{ base: "column", lg: "row" }}>
          <Avatar
            size="sm"
            name={row?.name}
            src={row?.image}
            fontWeight="bold"
            fontSize="sm"
            color="white"
            alignSelf={'center'}
            display={{
              base: 'none',
              lg: 'flex'
            }}
          />
          <Text ml={2} alignSelf={'center'} fontSize="13px" noOfLines={1}>{row?.name}</Text>
        </Stack>
      )
    },
    {
      name: 'USERNAME',
      selector: row => row.username,
      sortable: true,
      cellExport: row => row.username,
      resizable: true
    },
    {
      name: 'EMAIL',
      selector: row => row.email,
      sortable: true,
      cellExport: row => row.email,
      resizable: true
    },
    {
      name: 'ROL',
      selector: row => row.role,
      sortable: true,
      cellExport: row => row.role,
      center: true,
      cell: row => (
        <div>
          <Badge
            bg={row.role === 'ADMIN' ? 'messenger.600' : 'red.600'}
            variant="solid"
            w={20}
            textAlign="center"
            py={3}
            rounded="md"
            color="white"
          >
            {row.role}
          </Badge>
        </div>
      )
    },
    {
      name: 'ESTADO',
      sortable: true,
      cellExport: row => row.estado,
      center: true,
      cell: row => (
        <div>
          <Badge
            bg={row.estado === 'ACTIVO' ? 'green.600' : 'red.600'}
            variant="solid"
            w={24}
            textAlign="center"
            py={3}
            rounded="md"
          >
            {row.estado}
          </Badge>
        </div>
      )
    },
    {
      name: 'ACCIONES',
      export: false,
      center: true,
      cell: row => (
        <div>
          <ModalEditarUsuario row={row} />
          <AlertaEliminar row={row} />
        </div>
      ),
      width: '220px'
    }
  ]

  const tableData = {
    columns: columns,
    data: users,
  }

  if (isLoading) {
    return (
        <Loading>
            <PacmanLoader color="#625bf8" loading={true} size={50} />
        </Loading>
      )
  }

  return (
    <>
      <Stack direction="row" justifyContent="space-between" py={3}>
        <ModalAgregarUsuario />
        <HStack spacing={4} direction="row">
          <IconButton isDisabled colorScheme="red" _dark={{ bg: "red.600", color: "white", _hover: { bg: "red.700" } }} aria-label='Eliminar' icon={<Icon as={MdDelete} fontSize="2xl" />} variant="solid" rounded="full" />
        </HStack>
      </Stack>

      <Box
        overflow="hidden"
        boxShadow={'base'}
        bg="white"
        _dark={{ bg: "primary.1000" }}
        mt={2}
        pt={2}
        borderRadius={'2xl'}
      >
        <DataTableExtensions
          {...tableData}
          print={false}
          exportHeaders={true}
          filterPlaceholder="BUSCAR"
          numberOfColumns={7}
          zIndex={1000}
          fileName={'PERSONAS' + new Date().toLocaleDateString()}
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
            pointerOnHover={true}
            responsive={true}
            noDataComponent={<Text mb={4} fontSize="lg">NO DATA FOUND</Text>}
          />
        </DataTableExtensions>
      </Box>
    </>
  );
};

export default Usuarios;