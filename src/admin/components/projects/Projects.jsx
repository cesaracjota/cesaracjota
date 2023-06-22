import React, { useEffect } from 'react';
import DataTable from 'react-data-table-component';
import { FiChevronLeft, FiChevronRight, FiChevronsLeft, FiChevronsRight } from 'react-icons/fi';
import { customStyles } from '../../../configuration/customStyles';
import DataTableExtensions from 'react-data-table-component-extensions';
import 'react-data-table-component-extensions/dist/index.css';
import { useColorModeValue, Box, Stack, HStack, Badge, Text, IconButton } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ToastChakra } from '../../../helpers/toast';
import { AlertaEliminar } from './AlertEliminar';
import { Icon } from '@chakra-ui/icons';
import { Loading } from '../../../configuration/Loading';
import { MdDelete } from 'react-icons/md';
import '../../../theme/solarizedTheme';
import { PacmanLoader } from 'react-spinners';
import { getAllProjects, reset } from '../../../features/projectSlice';
import { ModalEditarProyecto } from './ModalEditarProyecto';
import { ModalAgregarProyecto } from './ModalAgregarProyecto';

export const Projects = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const themeTable = useColorModeValue('default', 'solarized');

  const { user } = useSelector((state) => state.auth);

  const { projects, isLoading, isError, message } = useSelector((state) => state.projects);

  useEffect(() => {

    async function loadData() {
      try {

        if (!user) {
          navigate("/login");
        }

        if (isError) {
          ToastChakra('Error', message, 'error', 1500);
          console.log(message);
        }

        dispatch(getAllProjects())

        return () => {
          dispatch(reset())
        }

      } catch (error) {
        console.log(error);
        ToastChakra('Error', error.message, 'error', 1500);
      }
    }

    loadData();

  }, [user, navigate, dispatch, isError, message]);

  const columns = [
    {
      name: 'PROJECT TITLE',
      selector: row => row.title,
      sortable: true,
      cellExport: row => row.title,
      resizable: true
    },
    {
      name: 'AUTHORS',
      selector: row => row.authors.join(', '),
    },
    {
      name: 'TOPICS',
      selector: row => row.topics.join(', '),
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
            w={28}
            textAlign="center"
            py={2}
            rounded="xl"
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
          <ModalEditarProyecto row={row} />
          <AlertaEliminar row={row} />
        </div>
      ),
      width: '220px'
    }
  ]

  const tableData = {
    columns: columns,
    data: projects,
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
        <ModalAgregarProyecto />
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
          fileName={'CERTIFICADOS' + new Date().toLocaleDateString()}
        >
          <DataTable
            progressPending={isLoading}
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