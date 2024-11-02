import { toast } from "react-toastify";

export const getData = key => {
    const data = localStorage.getItem(key);
    if(data){
        return JSON.parse(data);
    }
    return [];
}

export const storeToDB = (key, id) => {
    const data = getData(key);
    if(data.includes(id)){
        toast.warning("Book already exists!");
        return;
    }

    data.push(id);
    localStorage.setItem(key, JSON.stringify(data));
    toast.success('Book added successfully.')
}