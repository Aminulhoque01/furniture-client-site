import React, { useEffect, useState } from 'react';

const useAdmin = ({email}) => {
    const [isAdmin, setIsAdmin] = useState(false);
    const [isAdminLoading, setIsAdminloading] = useState(true);

    useEffect(()=>{
        if(email){
            fetch('')
            .then(res => res.json())
            .then(data =>{
                console.log(data);
                setIsAdmin(data.isAdmin);
                setIsAdminloading(false);
            })
        }
    },[email])
    return [isAdmin, isAdminLoading]
};

export default useAdmin;