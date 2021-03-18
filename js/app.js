'use strict';

let myForm = document.getElementById( 'myForm' );
let myTable = document.getElementById( 'myTable' );
let header = ['#' ,'Image' , 'Name' , 'Season'];


let allFlowerList = [];

function flowerList ( nameF,option,season ) {
  this.nameF=nameF;
  this.option=option;
  this.season=season;
  // this.img = `imgs/${option}.jpeg`;
  allFlowerList.push( this );

}
tableHeader ();


flowerList.prototype.render = function(){
  let tr = document.createElement( 'tr' );




  let x = document.createElement( 'button' );
  x.textContent='x';
  tr.appendChild( x );
  let td = document.createElement( 'td' );
  tr.appendChild( td );

  let myImg = document.createElement( 'img' );
  td.appendChild( myImg );
  myImg.src = `./imgs/${this.option.toLowerCase()}.jpeg`;
  console.log( myImg.src );



  let td2 = document.createElement( 'td' );
  td2.textContent = this.option;

  let td3 = document.createElement( 'td' );
  td3.textContent = this.season;

  myTable.appendChild( tr );
  tr.appendChild( td );
  tr.appendChild( td2 );
  tr.appendChild( td3 );
};

function handleClick( event ){
  event.preventDefault();

  let nameF = event.target.nameF.value;
  let option = event.target.option.value.toLowerCase();
  let season = event.target.season.value;

  let newObj = new flowerList ( nameF,option,season );
  newObj.render();
  localStorage.setItem( 'data', JSON.stringify( allFlowerList ) );

}

function checkLS(){
  if ( localStorage.getItem( 'data' ) ){
    allFlowerList = JSON.parse( localStorage.getItem( 'data' ) );
    renderLS();

  }
}

function renderLS(){
  for ( let i=0; i < allFlowerList.length;i++ ){

    let tr = document.createElement( 'tr' );

    let x = document.createElement( 'button' );
    x.textContent='x';
    tr.appendChild( x );

    let td = document.createElement( 'td' );
    tr.appendChild( td );

    let myImg = document.createElement( 'img' );
    td.appendChild( myImg );
    myImg.src = `./imgs/${allFlowerList[i].option.toLowerCase()}.jpeg`;
    console.log( myImg.src );

    let td2 = document.createElement( 'td' );
    td2.textContent = allFlowerList[i].option;

    let td3 = document.createElement( 'td' );
    td3.textContent = allFlowerList[i].season;

    myTable.appendChild( tr );
    tr.appendChild( td );
    tr.appendChild( td2 );
    tr.appendChild( td3 );
  }
}

// function lower()
// {
//   let lc = document.getElementById( 'nameF' ).value;
//   document.getElementById( 'nameF' ).value = lc.toLowerCase();
// }


function tableHeader () {
  let tr = document.createElement( 'tr' );
  myTable.appendChild( tr );

  for ( let i=0; i<header.length; i++ ) {
    let td = document.createElement( 'td' );
    td.textContent = header[i];
    tr.appendChild( td );
  }

}

// lower();
checkLS();
myForm.addEventListener( 'submit', handleClick );
