//Trong kỳ thi tuyển, một thí sinh sẽ trúng tuyển nếu có điểm tổng kết lớn hơn hoặc bằng điểm chuẩn và không có môn nào điểm 0.
// Điểm tổng kết là tổng điểm của 3 môn thi và điểm ưu tiên.
// Điểm ưu tiên bao gồm điểm ưu tiên theo khu vực và điểm ưu tiên theo đối tượng.
// Viết chương trình nhập: điểm chuẩn của hội đồng, điểm 3 môn thi của thí sinh, khu vực (Nhập X nếu không thuộc khu vực ưu tiên) và đối tượng dự thi (Nhập 0 nếu không thuộc đối tượng ưu tiên). Cho biết thí sinh đó đậu hay rớt và tổng số điểm đạt được.
var nutXuatKQ = domID('nutXuatKQ').onclick = function () {
    //INPUT: nhập điểm chuẩn của hội đồng, điểm 3 môn thi của thí sinh, khu vực và đối tượng dự thi.
    var diemchuanHoiDong = Number(domID('diemchuanHoiDong').value);
    var diemMonThu1 = Number(domID('diemMonThu1').value);
    var diemMonThu2 = Number(domID('diemMonThu2').value);
    var diemMonThu3 = Number(domID('diemMonThu3').value);
    var khuVuc = Number(domID('khuVuc').value);
    var doiTuongDuThi = Number(domID('doiTuongDuThi').value);
    var ketQuaTongDiem = domID('ketQuaTongDiem');
    var tongDiem = 0;
    //PROGRESS
    if (diemMonThu1 > 0 && diemMonThu2 > 0 && diemMonThu3 > 0) {
        tongDiem = diemMonThu1 + diemMonThu2 + diemMonThu3 + khuVuc + doiTuongDuThi;
        if (tongDiem >= diemchuanHoiDong) {
            //OUTPUT: Cho biết thí sinh đó đậu hay rớt và tổng số điểm đạt được.
            ketQuaTongDiem.innerHTML = `Bạn đã đậu. Tổng điểm là ${tongDiem} `;
        }
        else {
            //OUTPUT:
            ketQuaTongDiem.innerHTML = `Bạn đã rớt. Tổng điểm là ${tongDiem}`;
        }
    }
    else if (diemMonThu1 == 0 || diemMonThu2 == 0 || diemMonThu3 == 0) {
        //OUTPUT:
        ketQuaTongDiem.innerHTML = `Bạn đã rớt. Do có 1 môn điểm bằng 0`;
    }
    else {
        alert('Kiểm tra lại điểm đã nhập');
    }
}

//Viết chương trình nhập vào thông tin tiêu thụ điện ((Tên, số Kw))
// Tính và xuất Tiền trả theo quy tắc:
// 50kw đầu : 500d/Kw    
// 50kw kế : 650d/Kw    
// 100kw kế : 850d/Kw    
// 150kw kế : 1100d/Kw    
// Còn lại : 1300d/Kw
var nutTienDien = domID('nutTienDien').onclick = function () {
    //INPUT
    var ten = domID('ten').value;
    var soKW = Number(domID('soKW').value);
    //PROGRESS
    var tongDien = 0;
    const kW1 = 500;
    const kW2 = 650;
    const kW3 = 850;
    const kW4 = 1100;
    const kW5 = 1300;
    var ketQuaTienDien = domID('ketQuaTienDien');
    if (soKW > 0 && soKW <= 50) {
        tongDien = soKW * kW1;
    } else if (soKW > 50 && soKW <= 100) {
        tongDien = 50 * kW1 + (soKW - 50) * kW2;
    } else if (soKW > 100 && soKW <= 200) {
        tongDien = 50 * kW1 + 50 * kW2 + (soKW - 100) * kW3;
    } else if (soKW > 200 & soKW <= 350) {
        tongDien = 50 * kW1 + 50 * kW2 + 100 * kW3 + (soKW - 200) * kW4;
    } else if (soKW > 350) {
        tongDien = 50 * kW1 + 50 * kW2 + 100 * kW3 + 150 * kW4 + (soKW - 350) * kW5;
    } else {
        alert('Số KW không hợp lệ, vui lòng kiểm tra lại');
    }
    ketQuaTienDien.innerHTML = `Họ và tên: ${ten}, Tiền điện là: ${tongDien.toLocaleString()} VND`;
}

// Viết chương trình nhập vào thông tin của 1 cá nhân (Họ tên, tổng thu nhập năm, số người phụ thuộc). Tính và xuất thuế thu nhập cá nhân phải trả theo quy định sau: Thu nhập chịu thuế = Tổng thu nhập năm - 4tr- Số người phụ thuộc * 1.6tr.
var tinhThue = domID('tinhThue').onclick = function () {
    //input
    var hoTen = domID('hoTen').value;
    var tongThuNhap = parseInt(domID('tongThuNhap').value);
    var nguoiPhuThuoc = parseInt(domID('nguoiPhuThuoc').value);
    var tongThue = 0;
    var thuNhapChiuThue = tongThuNhap - 4e+6 - nguoiPhuThuoc - 16e+5;
    //progress
    if (thuNhapChiuThue > 0 && thuNhapChiuThue <= 6e+7) {
        tongThue = thuNhapChiuThue * 0.05;
    } else if (thuNhapChiuThue > 6e+7 && thuNhapChiuThue <= 12e+7) {
        tongThue = thuNhapChiuThue * 0.1;
    } else if (thuNhapChiuThue > 12e+7 && thuNhapChiuThue <= 21e+7) {
        tongThue = thuNhapChiuThue * 0.15;
    }
    else if (thuNhapChiuThue > 21e+7 && thuNhapChiuThue <= 384e+6) {
        tongThue = thuNhapChiuThue * 0.2;
    }
    else if (thuNhapChiuThue > 384e+6 && thuNhapChiuThue <= 624e+6) {
        tongThue = thuNhapChiuThue * 0.25;
    }
    else if (thuNhapChiuThue > 624e+6 && thuNhapChiuThue <= 96e+7) {
        tongThue = thuNhapChiuThue * 0.3;
    }
    else if (thuNhapChiuThue > 96e+7) {
        tongThue = thuNhapChiuThue * 0.35;
    } else {
        alert("Số tiền nhập không hợp lệ !")
    }
    //output
    tongThue = new Intl.NumberFormat('vn-VN').format(tongThue);
    var ketQuaThue = domID('ketQuaThue').innerHTML = `Họ tên : ${hoTen} - Tiền thuế : ${tongThue} VND`;
}

//❖ Viết chương trình tính hóa đơn khách hàng cho một công ty cáp. Có 2 loại khách hàng: Nhà dân và doanh nghiệp. Có 2 mức giá tính tiền cáp:
// 1.Nhà dân:
// • Phí xử lý hóa đơn: 4.5$
// • Phí dịch vụ cơ bản: 20.5$
// • Thuê kênh cao cấp: 7.5$ / kênh
// 2. Doanh nghiệp
// • Phí xử lý hóa đơn: 15$
// • Phí dịch vụ cơ bản: 75$ cho tổng 10 kết nối đầu, mỗi kết nối thêm 5$ / kết nối
// • Thuê kênh cao cấp: 50$ / kênh
// ❖ Chương trình cho phép nhập vào Mã khách hàng, loại khách hàng, số kết nối, số kênh cao cấp. Nếu chọn loại khách hàng là Doanh nghiệp ô nhập số kết nối sẽ hiện lên, nếu chọn loại khách hàng là nhà dân thì ô nhập kết nối sẽ ẩn đi hoặc disabled

function anTheInput() {
    var loaiKhachHang = domID('loaiKhachHang').value;
    if (loaiKhachHang == 'Nhà dân' || loaiKhachHang == 'Chọn loại khách hàng') {
        domID('soKetNoi').style.display = "none";
    } else if (loaiKhachHang == 'Doanh nghiệp') {
        domID('soKetNoi').style.display = "block";
    }
}
var tinhTienCap = document.getElementById('tinhTienCap').onclick = function () {
    //input: nhập vào Mã khách hàng, loại khách hàng, số kết nối, số kênh cao cấp
    var loaiKhachHang = domID('loaiKhachHang').value;
    var maKhachHang = domID('maKhachHang').value; //75$ cho tổng 10 kết nối đầu là mã khách hàng
    var soKenhCaoCap = domID('soKenhCaoCap').value * 1;
    var soKetNoi = domID('soKetNoi').value * 1;
    var tongKetNoi = 10;
    //progress
    if (loaiKhachHang == 'Doanh Nghiệp') {
        tongKetNoi = tinhTong(15, 75, 50, soKenhCaoCap, soKetNoi, 5);
    } else if (loaiKhachHang == 'Nhà dân') {
        tongKetNoi = tinhTong(4.5, 20.5, 7.5, soKenhCaoCap, 0, 0);
    } else if (loaiKhachHang == 'Chọn loại khách hàng') {
        alert("Hãy chọn loại khách hàng");
    }
    var ketQuaTienCap = document.getElementById('ketQuaTienCap');
    ketQuaTienCap.innerHTML = `Mã khách hàng: ${maKhachHang} - Tiền cáp: ${tongKetNoi} `;

}
function tinhTong(loaiKhachHang, maKhachHang, soKenhCaoCap, soKetNoi, tongKetNoi, so$MoiKetNoi) {
    var tong = loaiKhachHang + maKhachHang + soKenhCaoCap * soKetNoi * 7.5;
    return tongKetNoi > 10 && (tong += (tongKetNoi - 10) * so$MoiKetNoi);
}

