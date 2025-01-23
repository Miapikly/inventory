//working with 2d arrays
// create and display HTML table representing incentory data using DOM

function displayInventory(){
    const inventory=[
        ["Books", "The Great Gatsby", 10, 29.99],
        ["Magazines", "Time", 5, 5.99],
        ["Accessories", "Bookmark", 50, 1.99],
        ["Books", "1984", 10, 19.99],
        ["Magazines", "National Geographic", 8, 7.99],
        ["Accessories", "Reading Light", 30, 15.99],

    ]

    console.log(inventory)

    //table initialization
    //create table structure
    //define custom headers

    let inventoryHTML= '<table>';
     inventoryHTML+= '<tr><th>Type</th><th>Name</th><th>Quantity</th><th>Price($)</th></tr>'

    

    //display array elements
    inventory.forEach((item) =>{
        const [type,name,quantity,price] =item;
        inventoryHTML += `<tr>
                            <td>${type}</td>
                            <td>${name}</td>
                            <td>${quantity}</td>
                            <td>${price}</td>`
    });
    inventoryHTML+= '</table>';
    document.getElementById('inventory').innerHTML=inventoryHTML;
}

displayInventory()

