import Swal from "sweetalert2";

const getStoredItem = () => {
    const storedItemSTR = localStorage.getItem('readList');
    if (storedItemSTR) {
        const storedItem = JSON.parse(storedItemSTR);
        return storedItem
    }
    else {
        return []
    }
}


const addItemToDB = (id) => {
    const storedItem = getStoredItem();
    if (storedItem.includes(id)) {
        Swal.fire({
            title: "Good job!",
            text: "You clicked the button!",
            icon: "success"
        });
    }
    else {
        storedItem.push(id);
        const storedItemSTR = JSON.stringify(storedItem);
        localStorage.setItem('readList', storedItemSTR)
    }
}

const removeItemFromDB = (id) => {
    // const storedItem = getStoredItem();
    // const remainingList = storedItem.find(item => item === id)
    // return remainingList
    // // if (storedItem) {
    //     const remainingList = storedItem.filter(itemId => itemId !== id)
    //     localStorage.setItem('readList', remainingList)
    //     return remainingList
    // }

}

export { addItemToDB as addItem, getStoredItem, removeItemFromDB }
