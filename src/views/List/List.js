import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { makeStyles, alpha } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TablePagination from '@material-ui/core/TablePagination'
import TableRow from '@material-ui/core/TableRow'
import TableSortLabel from '@material-ui/core/TableSortLabel'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import { getAllZombies } from 'requests'

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1
  }
  if (b[orderBy] > a[orderBy]) {
    return 1
  }
  return 0
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy)
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index])
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0])
    if (order !== 0) {
      return order
    }
    return a[1] - b[1]
  })
  return stabilizedThis.map((el) => el[0])
}

const headCells = [
  { id: 'id', numeric: true, disablePadding: true, label: 'ID' },
  { id: 'idade', numeric: true, disablePadding: true, label: 'Idade' },
  { id: 'sexo', numeric: false, disablePadding: false, label: 'Sexo' },
  { id: 'peso', numeric: true, disablePadding: false, label: 'Peso' },
  { id: 'altura', numeric: true, disablePadding: false, label: 'Altura' },
  { id: 'tipoSanguineo', numeric: false, disablePadding: false, label: 'Tipo Sanguíneo' },
  { id: 'generoMusical', numeric: false, disablePadding: false, label: 'Gênero Musical' },
  { id: 'esporte', numeric: false, disablePadding: false, label: 'Esporte' },
  { id: 'game', numeric: false, disablePadding: false, label: 'Game' },
  { id: 'forca', numeric: true, disablePadding: false, label: 'Força' },
  { id: 'velocidade', numeric: true, disablePadding: false, label: 'Velocidade' },
  { id: 'inteligencia', numeric: true, disablePadding: false, label: 'Inteligência' },
]

function EnhancedTableHead(props) {
  const { classes, order, orderBy, onRequestSort } = props
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property)
  }

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <StyledTableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              style={{ color: 'white' }}
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </span>
              ) : null}
            </TableSortLabel>
          </StyledTableCell>
        ))}
      </TableRow>
    </TableHead>
  )
}

EnhancedTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
}

const useToolbarStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
    backgroundColor: '#f9fdc3',
  },
  highlight:
    theme.palette.type === 'dark'
      ? {
          color: theme.palette.text.main,
          backgroundColor: theme.palette.secondary.dark,
        }
      : {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.secondary.dark,
        },
  title: {
    flex: '1 1 100%',
    color: 'black',
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}))

const EnhancedTableToolbar = () => {
  const classes = useToolbarStyles()

  return (
    <Toolbar className={clsx(classes.root)}>
      <Typography className={classes.title} variant="h6" id="tableTitle" component="div">
        <s>Hospedeiros</s> ZUMBIS!!
      </Typography>
    </Toolbar>
  )
}

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
}

const styledTableCellStyles = {
  // Defina os estilos desejados aqui
  color: 'white',
  textAlign: 'center',
  // Outros estilos de sua escolha
}

// Componente de Alto Nível (Wrapper) para TableCell
const StyledTableCell = (props) => {
  return (
    <TableCell
      {...props} // Passe todas as props recebidas para TableCell
      style={styledTableCellStyles} // Aplique os estilos ao TableCell
    />
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  paper: {
    width: '100%',
    marginBottom: theme.spacing(2),
    backgroundColor: '#292637',
  },
  table: {
    minWidth: 750,
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
}))

export default function EnhancedTable() {
  const [rows, setRows] = useState([])

  useEffect(() => {
    getAllZombies().then((resp) => {
      console.log(resp)
      setRows(resp)
    })
  }, [])

  const classes = useStyles()
  const [order, setOrder] = useState('asc')
  const [orderBy, setOrderBy] = useState('calories')
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(10)

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc'
    setOrder(isAsc ? 'desc' : 'asc')
    setOrderBy(property)
  }

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage)

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <EnhancedTableToolbar />
        <TableContainer>
          <Table className={classes.table} aria-labelledby="tableTitle" size={'medium'} aria-label="enhanced table">
            <EnhancedTableHead
              classes={classes}
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  return (
                    <TableRow style={{ color: 'white' }} hover tabIndex={-1} key={row.id}>
                      <StyledTableCell align="center">{row.id}</StyledTableCell>
                      <StyledTableCell align="center">{row.age}</StyledTableCell>
                      <StyledTableCell align="center">{row.sex}</StyledTableCell>
                      <StyledTableCell align="center">{row.weight}</StyledTableCell>
                      <StyledTableCell align="center">{row.height}</StyledTableCell>
                      <StyledTableCell align="center">{row.bloodType}</StyledTableCell>
                      <StyledTableCell align="center">{row.musicalGenre}</StyledTableCell>
                      <StyledTableCell align="center">{row.sport}</StyledTableCell>
                      <StyledTableCell align="center">{row.game}</StyledTableCell>
                      <StyledTableCell align="center">{row.strength}</StyledTableCell>
                      <StyledTableCell align="center">{row.speed}</StyledTableCell>
                      <StyledTableCell align="center">{row.intelligence}</StyledTableCell>
                    </TableRow>
                  )
                })}
              {emptyRows > 0 && (
                <TableRow style={{ height: 53 * emptyRows }}>
                  <StyledTableCell colSpan={12} style={{ color: 'white' }} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          style={{ color: 'white' }}
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          labelRowsPerPage={'Registros por página'}
          labelDisplayedRows={({ from, to, count }) => `${from}-${to} de ${count}`}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  )
}
