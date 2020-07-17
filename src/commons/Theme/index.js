import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  // Bảng màu
  color: {
    // tông màu chính
    primary: "#D32F2F",
    // tông màu phụ
    secondary: "#00BCD4",
    //   lỗi
    error: "#E64A19",
  },
  // kiểu chữ
  typography: {
    fontFamily: "Roboto",
  },
  //   hình dạng
  shape: {
    borderRadius: 4,
    background: "#7B1FA2",
    textColor: "White",
    border: "#CCCCCC",
  },
});

export default theme;
