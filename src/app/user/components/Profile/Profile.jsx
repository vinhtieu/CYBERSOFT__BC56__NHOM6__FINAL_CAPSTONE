import React from 'react'
import { useSelector } from 'react-redux';
import { Card } from 'antd';
import { courses } from '../../../../api/service';
import { NavLink } from 'react-router-dom';

export default function Profile() {
     let UserProfile = useSelector((state) => state.user.userProfile);

     const handleCancelEnrollment = (data) => {
      courses.huyGhiDanh({data})
      .then((res) => {
        const updatedUserProfile = {
          ...UserProfile,
          chiTietKhoaHocGhiDanh: UserProfile.chiTietKhoaHocGhiDanh.filter(
            (course) => course.maKhoaHoc !== maKhoaHoc
          )}

          console.log(res);
       })
       .catch((err) => {
            console.log(err);
       });
     }

    return (
        <div className="ThongTinCaNhan container py-20">
      <p className="text-xl mb-10 font-bold">Profile</p>
      <div className="text-lg font-semibold border-b pb-3 flex">
        <div>
          <img
            src="https://st.quantrimang.com/photos/image/2017/04/08/anh-dai-dien-FB-200.jpg"
            alt=""
            className="w-40"
          />
        </div>
        <div className="pl-5">
          <p>
            <span>Tài Khoản :{UserProfile.taiKhoan}</span>
            <span className="text-amber-500 mr-2"></span>
            <span className="text-blue-500 text-sm">
             
            </span>
          </p>
          <p>
            <span>Email: {UserProfile.email}</span>
            <span className="text-amber-500 mr-2"></span>
          </p>
          <p>
            <span>Họ tên: {UserProfile.hoTen}</span>
            <span className="text-amber-500 mr-2"></span>
          </p>
          <p>
            <span>Số điện thoại:  {UserProfile.soDT}</span>
            <span className="text-amber-500"></span>
          </p>
        </div>
      </div>
      <div>
        <span className=" font-semibold text-amber-500 text-[40px] my-5">
          courses
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {UserProfile.chiTietKhoaHocGhiDanh.map((item,index) => { 
            return <Card
                      key={index}
                      value={item.maKhoaHoc}
                      hoverable
                      style={{ width: 240 }}
                      cover={<img alt="example" src={item.hinhAnh} className='h-48 object-cover' />}
                    >
                      {item.tenKhoaHoc}
                      <NavLink className="h-10 w-ful rounded block leading-10
            text-center mt-2 bg-red-600 text-white"
                       style ={{
                        color:'black',
                        backgroundColor:'red'
                       }}
                       >
                    Hủy ghi danh
                  </NavLink>           
             </Card>          
           })}
           </div>
        </span>
      </div>
    </div>
    )
}