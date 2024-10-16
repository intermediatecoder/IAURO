function Container_needed(a, c) {
    
    let Shipments = 0;
    for (let i = 0; i < a.length; i++) {
        Shipments += a[i];
    }

    c.sort((x, y) => {y - x});

    let containersUsed = 0; 
    
    for (let i = 0; i < c.length; i++) {
        Shipments -= c[i];
        containersUsed++; 
        if (Shipments <= 0) {
            return containersUsed 
        }
    } 
    return -1;

}

let Shipments = [10, 20,30];
let Container_limit = [15,15,20, 10];  


const ans = Container_needed(Shipments, Container_limit);
if(ans>=0){
    console.log("Minimum number of containers needed : ", ans);
}
else{
    console.log("Not Having enough Container : -1");
}

