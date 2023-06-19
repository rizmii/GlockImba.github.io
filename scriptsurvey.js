function kirimData() { 
    var name = document.getElementById( "nama").value 
    var IDpemilik = document.getElementById("IDpemilik").value 
    var model = document.querySelector("input[name=model]:checked").value 
    var Alamat = document.getElementById("alamat").value 
    var generasi = document.addEventListener("change", function() {
      var selectedValue = genSelect.value;
      console.log(selectedValue); })
    var tanggal = new Date();
    var tanggalString = tanggal.toDateString();
    alert( 
    "Nama : " + name +
    "\nID : " + IDpemilik +
    "\nModel : " + model + 
    "\nAlamat : " + Alamat +
    "\nGenerasi : " + generasi +
    "\ntanggal : " + tanggal
    )
}

    
