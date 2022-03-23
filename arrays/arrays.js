const items = [
    { name : 'name1', price: 1, stauts: false},
    { name : 'name2', price: 12, stauts: true},
    { name : 'name3', price: 13, stauts: false},
    { name : 'name4', price: 123, stauts: true},
    { name : 'name5', price: 41, stauts: false},
    { name : 'name6', price: 5541, stauts: false},
    { name : 'name7', price: 198, stauts: false},
    { name : 'name8', price: 9871, stauts: true},
];

// filter

const filteredItems = items.filter((item) =>{
    return item.price <= 100;
});
console.table(items);
console.table(filteredItems);

// map

const itemName = items.map((item) =>{
    if(item.stauts == false){
        return 'Sisas';
    }else{
        return 'Nokas';
    }
});

console.table(itemName);
