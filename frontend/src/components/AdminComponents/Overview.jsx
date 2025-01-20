import InfoIcon from '@mui/icons-material/Info';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { userlogout } from '../../feature/handleApi/tokenSlice';
import { deleteUser } from "../../feature/handleApi/userSlice";

export default function Overview() {

    const dispatch = useDispatch();

    const username = useSelector((state) => state.user.name);
    const userImage = useSelector((state) => state.user.userImageURL);
    const [loading, setLoading] = useState(false);

    const [count, setCount]=useState(0)
    const [userCount,setUserCount]=useState(0);


    useEffect(() => {
        const fetchdata = async () => {
            setLoading(true);
            try {
                const response = await axios.get(`/getallPost`);

                setCount(response.data);
                
                
            } catch (error) {
                //console.log(error);

            } finally {
                setLoading(false);
            }
        }
        fetchdata();
    }, [])

    useEffect(() => {
        const fetchdata = async () => {
          setLoading(true);
          try {
            const response = await axios.get(`/getalluser`);
            setUserCount(response.data.user);
    
            
          } catch (error) {
            //console.log(error);
            //console.log(error.response.data);
    
    
          }finally {
            setLoading(false);
        }
        }
        fetchdata();
      }, [])

    function handleClick() {
        dispatch(userlogout())
        dispatch(deleteUser());
    }

    const NumberofBlogs=count.length;
    const NumberofUsers=userCount.length;

    return (
        <div className='container'>
            <div className="container">
                <div className='row'>
                    <em>Admin Dashboard</em>
                    <h1 className='m-3'>Welcome <span>{username}</span><br /></h1>
                </div>
                <div className='row'>
                    <div className="container w-50">
                        {userImage ? (<img src={userImage} alt="profile" width="250" height="250" className="rounded-circle m-3" />) : (<img src="/blank.png" alt="profile" width="250" height="250" className="rounded-circle m-3" />)}
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm">
                        <div className="NumberofPost">
                            <p className='mx-2'>Total number of posts</p>
                            <p className="h1 text-center">{NumberofBlogs}</p>
                            <p className='text-end m-2'><InfoIcon/></p>
                        </div>
                    </div>
                    <div className="col-sm ">
                        <div className="NumberofUsers">
                            <p className='mx-2'>Total number of users</p>
                            <p className="h1 text-center">{NumberofUsers}</p>
                            <p className='text-end m-2'><InfoIcon/></p>
                        </div>
                    </div>
                </div>

                <div className="d-flex justify-content-between">
                    <div className="p-2 ">
                    <img src="/blodimage.jpeg" height="60" alt="users" className='' />
                    </div>
                    <div className="p-2 my-2">
                    <h5 className="title">Users</h5>
                    </div>
                    <div className="p-2 my-2">
                    <Link to={'/admin/dashboard/users'} className="btn btn-warning">Click</Link>
                        </div>
                </div>

                <div className="d-flex justify-content-between">
                    <div className="p-2 ">
                    <img src="/blog4.png" height="60" alt="posts" className='' />
                    </div>
                    <div className="p-2 my-2">
                    <h5 className="title">Posts</h5>
                    </div>
                    <div className="p-2 my-2">
                    <Link to={'/admin/dashboard/post'} className="btn btn-warning">Click</Link>
                        </div>
                </div>

                <div className="d-flex justify-content-between">
                    <div className="p-2 ">
                    <img src="/bookmark.jpeg" height="60" alt="posts" className='' />
                    </div>
                    <div className="p-2 my-2">
                    <h5 className="title">Your Bookmarks</h5>
                    </div>
                    <div className="p-2 my-2">
                    <Link to={'/user/layout/bookmarks'} className="btn btn-warning">Click</Link>
                        </div>
                </div>

                <div className="d-flex justify-content-between">
                    <div className="p-2 ">
                        <img src="/product.png" height="60" alt="posts" className='' />
                    </div>
                    <div className="p-2 my-2">
                        <h5 className="title">About</h5>
                    </div>
                    <div className="p-2 my-2">
                        <Link to={'/about'} className="btn btn-warning">Click</Link>
                    </div>
                </div>

                <div className="d-flex justify-content-between">
                    <div className="p-2 ">
                        <img src="/skyline2.jpg" height="60" alt="posts" className='' />
                    </div>
                    <div className="p-2 my-2">
                        <h5 className="title">Explore blogs</h5>
                    </div>
                    <div className="p-2 my-2">
                        <Link to={'/getAllBlogs'} className="btn btn-warning">Click</Link>
                    </div>
                </div>

                <div className="d-flex justify-content-between">
                    <div className="p-2 ">
                    <img src="/query1.jpeg" height="60" alt="posts" className='' />
                    </div>
                    <div className="p-2 my-2">
                    <h5 className="title">Qeries</h5>
                    </div>
                    <div className="p-2 my-2">
                    <Link to={'/underdevelopment'} className="btn btn-warning">Click</Link>
                        </div>
                </div>

                <div className="d-flex justify-content-between">
                    <div className="p-2 ">
                    <img src="/growth.jpeg" height="60" alt="posts" className='' />
                    </div>
                    <div className="p-2 my-2">
                    <h5 className="title">Contribute</h5>
                    </div>
                    <div className="p-2 my-2">
                    <Link to={'/add/blog'} className="btn btn-warning">Click</Link>
                        </div>
                </div>

                <div className="d-flex justify-content-between">
                    <div className="p-2 ">
                    <img src="/collage.jpeg" height="60" alt="posts" className='' />
                    </div>
                    <div className="p-2 my-2">
                    <h5 className="title">Personal posts</h5>
                    </div>
                    <div className="p-2 my-2">
                    <Link to={'/user/layout/dashboard'} className="btn btn-warning">Click</Link>
                        </div>
                </div>

                <div className="d-flex justify-content-between">
                    <div className="p-2 ">
                    <img src="/skyline.jpeg" height="60" alt="posts" className='' />
                    </div>
                    <div className="p-2 my-2">
                    <h5 className="title">Our Products</h5>
                    </div>
                    <div className="p-2 my-2">
                    <Link to={'/underdevelopment'} className="btn btn-warning">Click</Link>
                        </div>
                </div>

                

                <div className='m-3 d-flex justify-content-end'>
                    <button type="button" onClick={handleClick} className="btn btn-primary">Logout</button>
                </div>

            </div>
        </div>








    )
}
