// Import các thư viện cần thiết
import { ethers } from 'ethers';
import * as readlineSync from 'readline-sync';

// Định nghĩa URL của node RPC Ronin Saigon testnet
const RONIN_RPC_URL = 'https://saigon-testnet.roninchain.com/rpc';

// Hàm kiểm tra xem một chuỗi có phải là địa chỉ Ethereum hợp lệ hay không
function isValidEthereumAddress(address: string): boolean {
    return ethers.isAddress(address);
}

// Hàm chính để kiểm tra số dư
async function checkBalance(address: string): Promise<void> {
    try {
        // Tạo kết nối đến mạng Ronin thông qua RPC
        const provider = new ethers.JsonRpcProvider(RONIN_RPC_URL);

        // Kiểm tra tính hợp lệ của địa chỉ
        if (!isValidEthereumAddress(address)) {
            throw new Error('Địa chỉ ví không hợp lệ!');
        }

        // Lấy số dư của địa chỉ (kết quả là BigInt)
        const balance = await provider.getBalance(address);

        // Chuyển đổi số dư từ Wei sang RON (1 RON = 10^18 Wei)
        const balanceInRON = ethers.formatEther(balance);

        // Hiển thị kết quả
        console.log('\nKết quả:');
        console.log(`Địa chỉ: ${address}`);
        console.log(`Số dư: ${balanceInRON} RON`);

    } catch (error) {
        // Xử lý các lỗi có thể xảy ra
        if (error instanceof Error) {
            if (error.message.includes('invalid address')) {
                console.error('\nLỗi: Địa chỉ ví không hợp lệ!');
            } else if (error.message.includes('network')) {
                console.error('\nLỗi: Không thể kết nối đến mạng Ronin. Vui lòng kiểm tra kết nối internet!');
            } else {
                console.error(`\nLỗi không xác định: ${error.message}`);
            }
        }
    }
}

// Hàm main để chạy chương trình
async function main() {
    console.log('Chào mừng đến với ứng dụng kiểm tra số dư ví Ronin!');
    console.log('----------------------------------------');

    // Nhận địa chỉ ví từ người dùng
    const address = readlineSync.question('Nhập địa chỉ ví (bắt đầu bằng 0x): ');

    // Kiểm tra số dư
    await checkBalance(address);
}

// Chạy chương trình
main().catch(error => {
    console.error('Có lỗi xảy ra:', error);
});