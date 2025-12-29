import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Chip,
  useTheme,
} from "@mui/material";
import { BiEdit, BiTrash } from "react-icons/bi";

const VendorTable = ({ vendors, onEdit, onDelete }) => {
  const theme = useTheme();

  const getStatusColor = (status) => {
    switch (status) {
      case "active":
        return "success";
      case "inactive":
        return "default";
      case "suspended":
        return "error";
      default:
        return "default";
    }
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead
          sx={{
            backgroundColor: theme.palette.primary.main,
            "& th": {
              color: theme.palette.primary.contrastText,
              fontWeight: "bold",
            },
          }}
        >
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell>Category</TableCell>
            <TableCell align="center">Rating</TableCell>
            <TableCell>Status</TableCell>
            <TableCell align="center">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {vendors.length === 0 ? (
            <TableRow>
              <TableCell colSpan={7} align="center" sx={{ py: 4 }}>
                No vendors found
              </TableCell>
            </TableRow>
          ) : (
            vendors.map((vendor) => (
              <TableRow
                key={vendor.id}
                sx={{
                  "&:hover": {
                    backgroundColor: theme.palette.action.hover,
                  },
                }}
              >
                <TableCell sx={{ fontWeight: 500 }}>{vendor.name}</TableCell>
                <TableCell>{vendor.email}</TableCell>
                <TableCell>{vendor.phone}</TableCell>
                <TableCell>{vendor.category}</TableCell>
                <TableCell align="center">{vendor.rating} ⭐</TableCell>
                <TableCell>
                  <Chip
                    label={vendor.status}
                    color={getStatusColor(vendor.status)}
                    size="small"
                  />
                </TableCell>
                <TableCell align="center">
                  <IconButton
                    size="small"
                    color="primary"
                    onClick={() => onEdit(vendor)}
                    title="Edit"
                  >
                    <BiEdit />
                  </IconButton>
                  <IconButton
                    size="small"
                    color="error"
                    onClick={() => onDelete(vendor.id)}
                    title="Delete"
                  >
                    <BiTrash />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default VendorTable;
