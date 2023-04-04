*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Inter' ,sans-serif;
}
body{
    background-color: rgb(17, 14, 14);
    border: 2px solid rgb(212, 147, 147);
}





.rightStreet{
    background-color: antiquewhite;
    width: 35%;
    padding: 5px;
    margin: 5px;
    border-radius: 15px;
}
.leftStreet{
    width: 65%;
}
.theimage{
    background-color: grey;
    border-radius: 15px;
    margin: 15px;
    padding: 10px;
    
}
.upright{
    background-color: grey;
    height: 25vh;
    display: flex;
    justify-content: space-between;
    overflow: hidden;
    border-radius: 15px;
    margin: 15px;
    padding: 10px;
}
.downleft{
    background-color: rgb(132, 94, 94);
    overflow: hidden;
    border-radius: 15px;
    margin: 5px;
    padding: 10px;


}
.phot{
    width: 300px;
}
.downright{
     overflow: hidden;
    border-radius: 15px;
    margin: 5px;
    padding: 10px;
    background-color: rgb(150, 129, 129);
    height: 52vh;

}
.material{
    display: flex;
    height: 100vh;
    justify-content: space-around;
}
.below{
    display: flex;
    height: 50%;
}
.downleft{
    height: 52vh;
}
.fistImage{
    width: 25rem;
    border-radius: 15px;
    padding: 10px;
    
}
.last{
    display: flex;
    justify-content: space-between;
}
.snip{
    border: 1px solid black;
    border-radius: 15px;
    padding: 3px;
    
}
.firstImage{
  overflow: hidden;
}
.last{
    padding: 15px;
}
.twoimg{
    width: 400px;
    height: 150px;
    padding: 10px;
    padding-left: 30px;
}
.img2{
    border-radius: 50%;
    height: 100px;
    margin-left: 250px;
}



@media only screen and (max-width: 600px) {
    .material {
    flex-direction: column;
    height: auto;
    }
    .phot{
        width: 300px;
    }
    
    .rightStreet {
    width: 100%;
    }
    
    .leftStreet {
    width: 100%;
    }
    
    .phot {
    width: 100%;
    }
    
    .twoimg {
    width: 100%;
    height: auto;
    padding-left: 0;
    }
    
    .img2 {
    margin-left: 0;
    margin-right: auto;
    }
    }









    .navbar {
        color: antiquewhite;
        display: flex;
        justify-content: space-between;
        border: 2px white solid;
        border-radius: 15px;
        padding: 10px;
        padding-left: 1px;
        padding-right: 1px;
        margin: 5px;
      }
      
      .iems {
        border: 1px solid white;
        border-radius: 15px;
        padding: 6px;
        padding-left: 25px;
        padding-right: 25px;
        margin: 1px;
      }
      
      #items {
        padding-left: 100px;
        padding-right: 100px;
      }
      
      #menu{
        display: none;
      }
      
      @media only screen and (max-width: 600px) {



        .iems {
          display: none;
          
        }
        #items{
            display: block;
            float: left;
        }
      
        .left {
          flex-direction: column;
          align-items: flex-start;
        }
      
        #menu {
          display: block;
          float: right;
          margin-left: 7rem;
        }
      
        .hidden {
          display: none;
        }
      
        .left.show {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          width: 100%;
        }
      
        .left.show .iems {
          display: block;
        }
      
        .left.show #menu {
          display: none;
        }
      
        .right.show {
          display: flex;
          width: 100%;
        }
      
        .right.show .iems {
          display: block;
        }
      }
      
