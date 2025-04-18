import Swal from "sweetalert2";
const getStoredWishlist = () => {
    const storedItemSTR = localStorage.getItem('wishlist');
    if (storedItemSTR) {
        const storedItem = JSON.parse(storedItemSTR);
        return storedItem
    }
    else {
        return []
    }
}


const addWishlistToDB = (id) => {
    const storedItem = getStoredWishlist();
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
        localStorage.setItem('wishlist', storedItemSTR);
    }
}

export {addWishlistToDB , getStoredWishlist}
