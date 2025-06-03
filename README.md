# Ứng dụng Kiểm tra Số dư Ví Ronin

Đây là một ứng dụng TypeScript đơn giản để kiểm tra số dư của địa chỉ ví trên mạng Ronin Saigon (testnet).

## Yêu cầu hệ thống

- Node.js (phiên bản 14.0.0 trở lên)
- npm (Node Package Manager)

## Cài đặt

1. Đầu tiên, cài đặt Node.js từ [trang chủ Node.js](https://nodejs.org/)

2. Mở terminal hoặc command prompt trong thư mục dự án

3. Cài đặt các thư viện cần thiết:
```bash
npm install
```

## Cách sử dụng

1. Chạy ứng dụng bằng lệnh:
```bash
npm start
```

2. Khi được yêu cầu, nhập địa chỉ ví Ronin bạn muốn kiểm tra (bắt đầu bằng 0x)

3. Ứng dụng sẽ hiển thị số dư của ví bằng đơn vị RON

## Xử lý lỗi phổ biến

- **Địa chỉ ví không hợp lệ**: Đảm bảo địa chỉ ví bắt đầu bằng '0x' và có độ dài chính xác
- **Lỗi kết nối**: Kiểm tra kết nối internet và đảm bảo mạng Ronin Saigon đang hoạt động

## Lưu ý bảo mật

- Ứng dụng này chỉ đọc thông tin số dư công khai
- Không yêu cầu private key hoặc thông tin nhạy cảm
- Chỉ sử dụng node RPC công khai của Ronin Saigon

## Cấu trúc dự án

- `index.ts`: File mã nguồn chính
- `package.json`: Cấu hình dự án và dependencies
- `tsconfig.json`: Cấu hình TypeScript