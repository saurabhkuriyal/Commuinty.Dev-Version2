import InfoIcon from '@mui/icons-material/Info';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { userlogout } from '../feature/handleApi/tokenSlice';
import { deleteUser } from "../feature/handleApi/userSlice";

export default function Overview() {

    const dispatch = useDispatch();

    const token=useSelector((state)=>state.auth.token)

    const id=useSelector((state)=>state.user.userId);
    const username = useSelector((state) => state.user.name);
    const userImage = useSelector((state) => state.user.userImageURL);
    const [loading, setLoading] = useState(false);

    const [count, setCount] = useState(0)
    const [bookmarkCount, setbookmarkCount] = useState(0);


    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await axios.get(`/get/bookmarks/${id}`)

               // console.log("This is response", response.data.bookmarks[0].postIds);


                //console.log("This is response from get bookmarks", response);

                
                setbookmarkCount(response.data.bookmarks[0].postIds);



            } catch (error) {
                //console.log(error);
                //console.log(error.response);


            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, [])

    useEffect(() => {
        const fetchdata = async () => {
            setLoading(true);
            try {
                const response = await axios.get(`/get/userpost`,
                        {
                headers:{
                    'x-access-token':token,
                },
            }
                );
                //console.log("response is ...",response.data.userPosts);
                
                setCount(response.data.userPosts);
            } catch (error) {
                //console.log(error);

            }finally {
                //setLoading(false);
            }
        }
        fetchdata();
    }, [])

    function handleClick() {
        dispatch(userlogout())
        dispatch(deleteUser());
    }

    const NumberofBlogs = count.length;
    const NumberofBoookmarks = bookmarkCount.length;

    return (
        <div className='container'>
            <div className="container">
                <div className='row'>
                    <em>Admin Dashboard</em>
                    <h1 className='m-3'>Welcome <span>{username}</span><br /></h1>
                </div>
                <div className='row'>
                    <div className="container d-flex justify-content-center align-items-center">
                        {userImage ? (<img src={userImage} alt="profile" width="250" height="250" className="rounded-circle m-3" />) : (<img src="/blank.png" alt="profile" width="250" height="250" className="rounded-circle m-3" />)}
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm">
                        <div className="NumberofPost">
                            <p className='mx-2'>Total number of posts</p>
                            <p className="h1 text-center">{NumberofBlogs ?(NumberofBlogs):0}</p>
                            <p className='text-end m-2'><InfoIcon /></p>
                        </div>
                    </div>
                    <div className="col-sm ">
                        <div className="NumberofUsers">
                            <p className='mx-2'>Total number of users</p>
                            <p className="h1 text-center">{NumberofBoookmarks}</p>
                            <p className='text-end m-2'><InfoIcon /></p>
                        </div>
                    </div>
                </div>

                <div className="d-flex justify-content-between">
                    <div className="p-2 ">
                        <img src="/blodimage.jpeg" height="60" alt="users" className='' />
                    </div>
                    <div className="p-2 my-2">
                        <h5 className="title">Your Posts</h5>
                    </div>
                    <div className="p-2 my-2">
                        <Link to={'/user/layout/dashboard'} className="btn btn-warning">Click</Link>
                    </div>
                </div>

                <div className="d-flex justify-content-between">
                    <div className="p-2 ">
                        <img src="/blog4.png" height="60" alt="posts" className='' />
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
                        <img src="/skyline2.jpg" height="60" alt="posts" className='' />
                    </div>
                    <div className="p-2 my-2">
                        <h5 className="title">Explore blogs</h5>
                    </div>
                    <div className="p-2 my-2">
                        <Link to={'//getAllBlogs'} className="btn btn-warning">Click</Link>
                    </div>
                </div>

                <div className="d-flex justify-content-between">
                    <div className="p-2 ">
                        <img src="/blog13.jpeg" height="60" alt="posts" className='' />
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
                        <img src="/product.png" height="60" alt="posts" className='' />
                    </div>
                    <div className="p-2 my-2">
                        <h5 className="title">About</h5>
                    </div>
                    <div className="p-2 my-2">
                        <Link to={'/about'} className="btn btn-warning">Click</Link>
                    </div>
                </div>
                

                <div className='m-3 d-flex justify-content-end'>
                    <button type="button" onClick={handleClick} className="btn btn-primary">Logout</button>
                </div>

            </div>
        </div>

    )
}
