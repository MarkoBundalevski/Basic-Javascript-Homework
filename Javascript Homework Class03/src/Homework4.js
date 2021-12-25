function teamGirlsBoys(girls,boys){
    if(girls < 10){
        girls = `0${girls}`;
    }
    if(boys < 10){
        boys = `0${boys}`;
    }
    console.log(`${girls} girls and ${boys} boys`);
}
teamGirlsBoys(4, 8);
teamGirlsBoys(12, 15);