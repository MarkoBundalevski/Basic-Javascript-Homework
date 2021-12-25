function typeFunction(param){
    let typeParam = typeof(param);
    console.log(typeParam);
    return typeParam;
}
typeFunction(null);
typeFunction(true);
typeFunction(1);
typeFunction("Hello");
typeFunction();