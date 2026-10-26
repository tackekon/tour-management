import { DataTypes } from "sequelize";
import sequelize from "../config/database";
import slugify from "slugify";

const Tour = sequelize.define("Tour", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  title: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  code: {
    type: DataTypes.STRING(10)
  },
  images: {
    type: DataTypes.TEXT('long')
  },
  price: {
    type: DataTypes.INTEGER
  },
  discount: {
    type: DataTypes.INTEGER
  },
  information: {
    type: DataTypes.TEXT('long')
  },
  schedule: {
    type: DataTypes.TEXT('long')
  },
  timeStart: {
    type: DataTypes.DATE
  },
  stock: {
    type: DataTypes.INTEGER
  },
  status: {
    type: DataTypes.STRING(20)
  },
  position: {
    type: DataTypes.INTEGER
  },
  slug: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  deleted: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  deletedAt: {
    type: DataTypes.DATE
  }
}, {
  tableName: "tours",
  timestamps: true, // Tự động quản lý phần createdAt, updateAt
});

/*
Đăng ký một hook beforeCreate của Sequelize. Hook sẽ chạy trước khi một bản ghi tour mới được tạo trong database:
- tour là dữ liệu tour sắp được lưu.
- `${tour["title"]}-${Date.now()}` ghép tiêu đề tour với thời điểm hiện tại tính bằng mili giây. Ví dụ: Du lịch Đà Lạt-1792993967879.
- slugify(...) chuyển chuỗi thành slug thân thiện với URL, thường thành dạng chữ thường và bỏ ký tự không phù hợp.
- lower: true yêu cầu slug viết thường.
- strict: true loại bỏ các ký tự không phải chữ, số hoặc dấu phân cách được hỗ trợ.
Kết quả được gán vào tour["slug"] trước khi lưu.
Ví dụ: du-lich-da-lat-1792993967879
*/
Tour.beforeCreate((tour) => {
  tour["slug"] = slugify(`${tour["title"]}-${Date.now()}`, {
    lower: true,
    strict: true
  });
});

export default Tour;