
var g="Player Green's Turn";
var r="Player Red's Turn";
var b="Player Blue's Turn";
var y="Player Yellow's Turn";
var vv=1;           //disallow piece click
var nums=[];
var greenp=[];
var redp=[];
var yellowp=[];
var bluep=[];
var gt = 1;
var bt = 0;
var yt = 0;
var rt = 0;
var parg=['g-p1-d','g-p2-d','g-p3-d','g-p4-d'];
var parr=['r-p1-d','r-p2-d','r-p3-d','r-p4-d'];
var parb=['b-p1-d','b-p2-d','b-p3-d','b-p4-d'];
var pary=['y-p1-d','y-p2-d','y-p3-d','y-p4-d'];
//-------------------------------play area ids-----------
//--------------------green-----------------------
//----g r1
var gr11='g-r1-1';
var gr12='g-r1-2';
var gr13='g-r1-3';
var gr14='g-r1-4';
var gr15='g-r1-5';
var gr16='g-r1-6';
//----g r2
var gr21='g-r2-1';
var gr22='g-r2-2';
var gr23='g-r2-3';
var gr24='g-r2-4';
var gr25='g-r2-5';
var gr26='g-r2-6';
//----g r3
var gr31='g-r3-1';
var gr32='g-r3-2';
var gr33='g-r3-3';
var gr34='g-r3-4';
var gr35='g-r3-5';
var gr36='g-r3-6';
//--------------------blue-----------------------
//----b r1
var br11='b-r1-1';
var br12='b-r1-2';
var br13='b-r1-3';
var br14='b-r1-4';
var br15='b-r1-5';
var br16='b-r1-6';
//----b r2
var br21='b-r2-1';
var br22='b-r2-2';
var br23='b-r2-3';
var br24='b-r2-4';
var br25='b-r2-5';
var br26='b-r2-6';
//----b r3
var br31='b-r3-1';
var br32='b-r3-2';
var br33='b-r3-3';
var br34='b-r3-4';
var br35='b-r3-5';
var br36='b-r3-6';
//--------------------yellow-----------------------
//----y r1
var yr11='y-r1-1';
var yr12='y-r1-2';
var yr13='y-r1-3';
//----y r2
var yr21='y-r2-1';
var yr22='y-r2-2';
var yr23='y-r2-3';
//----y r3
var yr31='y-r3-1';
var yr32='y-r3-2';
var yr33='y-r3-3';
//----y r4
var yr41='y-r4-1';
var yr42='y-r4-2';
var yr43='y-r4-3';
//----y r5
var yr51='y-r5-1';
var yr52='y-r5-2';
var yr53='y-r5-3';
//----y r6
var yr61='y-r6-1';
var yr62='y-r6-2';
var yr63='y-r6-3';
//--------------------red-----------------------
//----r r1
var rr11='r-r1-1';
var rr12='r-r1-2';
var rr13='r-r1-3';
//----r r2
var rr21='r-r2-1';
var rr22='r-r2-2';
var rr23='r-r2-3';
//----r r3
var rr31='r-r3-1';
var rr32='r-r3-2';
var rr33='r-r3-3';
//----r r4
var rr41='r-r4-1';
var rr42='r-r4-2';
var rr43='r-r4-3';
//----r r5
var rr51='r-r5-1';
var rr52='r-r5-2';
var rr53='r-r5-3';
//----r r6
var rr61='r-r6-1';
var rr62='r-r6-2';
var rr63='r-r6-3';

var rand;

var gbahir=0;
var rbahir=0;
var bbahir=0;
var ybahir=0;
var gandr=4;
var randr=4;
var yandr=4;
var bandr=4;
var gpug=0,rpug=0,ypug=0,bpug=0;

//---------------------------------------------------------------------------------------------
function onlod(){
    localStorage.removeItem("random");
    localStorage.removeItem('greenMoveLeave');
    document.getElementsByTagName('img')[0].style.border='5px solid green';
    vv=1;   //disallow to click pieces
    nums=[];
}
//---------------------------------------------------------------------------------------------
function disableDice()
{
    let btn=document.getElementById('dice-btn');
    let turn=document.getElementById('turn-msg').innerHTML;
    
    document.getElementById('dice-btn').disabled=true;                //no click further (move piece)
    document.getElementById('dice-btn').style.border='none';
    document.getElementsByTagName('img')[0].style.border='none';
    vv=0;    //allow to click pieces
}
//---------------------------------------------------------------------------------------------
function changeFace(r1){
    let btn=document.getElementById('dice-btn');
    let str=`<img id=face${r1} src=src/f${r1}.jpg alt=face${r1}>`;
    btn.innerHTML=str;
    console.log(`face${r1}`);
    document.getElementById(`face${r1}`).style.height='50px';
    document.getElementById(`face${r1}`).style.width='50px';
}
//---------------------------------------------------------------------------------------------
function showRolling(){
    disableDice();
    let btn=document.getElementById('dice-btn');
    btn.style.border='none';
    let str=`<img id=rolling src=src/rol.gif alt=rolling-dice>`;
    btn.innerHTML=str;
}
function rollDice(){
    let btn=document.getElementById('dice-btn');
    let turn=document.getElementById('turn-msg').innerHTML;
    let t,a;
    if(turn==g){
        t=gbahir;
        a=gandr;
    }
    else if(turn==b){
        t=bbahir;
        a=bandr;
    }
    else if(turn==y){
        t=ybahir;
        a=yandr;
    }
    else if(turn==r){
        t=rbahir;
        a=randr;
    }
    let r1=Math.floor((Math.random() * 6) + 1);       //rand btwn 1 and 6
    r1=6;
    rand=r1;
    showRolling();              //show rolling dice
    setTimeout(() => {
        changeFace(r1);
        if(r1===6){
            if(nums.length==2){
                setTimeout(changeTurn, 500);
            }
            else{
                nums.push(r1);
                if(a>0){
                    disableDice();
                    stayPiecePrompt();
                    livePiecePrompt();
                }
                else{
                    if(t>0){
                        if(AllLiveStuck()){
                            setTimeout(changeTurn, 500);
                        }
                        else{
                            disableDice();
                            livePiecePrompt();
                        }
                    }
                    else{
                        setTimeout(changeTurn, 500);
                    }
                }
            }
        }
        else{                           //6 not came
            if(t>0){
                if(AllLiveStuck()){
                    setTimeout(changeTurn, 500);
                }
                else{
                    disableDice();
                    livePiecePrompt();
                }
            }
            else{
                setTimeout(changeTurn, 500);
            }
        }
    }, 1000);
}
//---------------------------------------------------------------------------------------------
function AllLiveStuck(){
    let turn=document.getElementById('turn-msg').innerHTML;
    let cls,arr,bb;
    let p1,p2,p3,p4,p5;
    if(turn==g){
        cls='g-p';
        arr=parg;
        bb=gbahir;
        p1=gr26; p2=gr25; p3=gr24; p4=gr23; p5=gr22;
    }
    else if(turn==r){
        cls='r-p';
        arr=parr;
        bb=rbahir;
        p1=rr12; p2=rr22; p3=rr32; p4=rr42; p5=rr52;
    }
    else if(turn==b){
        cls='b-p';
        arr=parb;
        bb=bbahir;
        p1=br21; p2=br22; p3=br23; p4=br24; p5=br25;
    }
    else if(turn==y){
        cls='y-p';
        arr=pary;
        bb=ybahir;
        p1=yr62; p2=yr52; p3=yr42; p4=yr32; p5=yr22;
    }
    let rnd=rand;
    if(bb>0){
    let gps=document.getElementsByClassName(cls);
    let c=0,live=0;
    for(let i=0; i<gps.length; i++){
        console.log('length,,,,,, '+gps.length);
        let bool=false;
        let p=gps[i].parentElement;
        let pid=p.id;
        console.log('piiidd '+pid);
        for(let j=0; j<arr.length; j++){
            if(pid==arr[j]){
                bool=true;
                console.log(bool);
            }
    }
        if(bool===false){
            live+=1;
            if((rnd===6) && (pid==p1 || pid==p2 || pid==p3 || pid==p4 || pid==p5)){c+=1}
            else if((rnd===5) && (pid==p1 || pid==p2 || pid==p3 || pid==p4)){c+=1}
            else if((rnd===4) && (pid==p1 || pid==p2 || pid==p3)){c+=1}
            else if((rnd===3) && (pid==p1 || pid==p2)){c+=1}
            else if((rnd===2) && (pid==p1)){c+=1}
            // if(pid==p1 || pid==p2 || pid==p3 || pid==p4 || pid==p5){
            //     c+=1;
            // }
        }
    }
    if(c==live){
        return true;
    }
    console.log('fas')
    return false;
    }
    else{
        return false;
    }
}
//---------------------------------------------------------------------------------------------
//-------------------g------------
let gpieces=document.getElementsByClassName('g-p');
for(let i=0; i<gpieces.length; i++){
    
    gpieces[i].onclick = function(){
        if(gt===1){
            // console.log('click-------green turn 1----------')
            decideTurn(this);
        }
        }
}      
//-----------------r------------
let rpieces=document.getElementsByClassName('r-p');
for(let i=0; i<rpieces.length; i++){
    
    rpieces[i].onclick=function(){
        if(rt===1){
            // console.log('click-----red------------')
            decideTurn(this);
        }
    }
}
//--------------b--------------
let bpieces=document.getElementsByClassName('b-p');
for(let i=0; i<bpieces.length; i++){

    bpieces[i].onclick=function(){
        if(bt===1){
            // console.log('click-----blue------------')
            decideTurn(this);
        }
    }
}
//------------y-------------
let ypieces=document.getElementsByClassName('y-p');
for(let i=0; i<ypieces.length; i++){

    ypieces[i].onclick=function(){
        if(yt===1){
            // console.log('click-----yellow------------')
            decideTurn(this);
        }
    }
}
//---------------------------------------------------------------------------------------------
function livePiecePrompt(){
    //first set their position on the top..........
    console.log('live piece prompt')
    let turn=document.getElementById('turn-msg').innerHTML;
    let arr;
    let cls;
    let p1,p2,p3,p4,p5;
    if(turn==g){
        cls='g-p';
        arr=parg;
        p1=gr26; p2=gr25; p3=gr24; p4=gr23; p5=gr22;
    }
    else if(turn==r){
        cls='r-p';
        arr=parr;
        p1=rr12; p2=rr22; p3=rr32; p4=rr42; p5=rr52;
    }
    else if(turn==b){
        cls='b-p';
        arr=parb;
        p1=br21; p2=br22; p3=br23; p4=br24; p5=br25;
    }
    else if(turn==y){
        cls='y-p';
        arr=pary;
        p1=yr62; p2=yr52; p3=yr42; p4=yr32; p5=yr22;
    }
    let rnd=rand;
    console.log('rnd '+rnd)
    let gps=document.getElementsByClassName(cls);
    for(let i=0; i<gps.length; i++){
        let bool=false;
        let p=gps[i].parentElement;
        let pid=p.id;

        for(let j=0; j<arr.length; j++){
            if(pid==arr[j]){
                bool=true;
                console.log(bool);
            }
        }
        if(bool===false){
            if((rnd===6) && (pid==p1 || pid==p2 || pid==p3 || pid==p4 || pid==p5)){}
            else if((rnd===5) && (pid==p1 || pid==p2 || pid==p3 || pid==p4)){}
            else if((rnd===4) && (pid==p1 || pid==p2 || pid==p3)){}
            else if((rnd===3) && (pid==p1 || pid==p2)){}
            else if((rnd===2) && (pid==p1)){}
            else{
                gps[i].style.border='3px solid white';
                // if(turn==g){
                    if(p.hasChildNodes()){
                        console.log('-------already');
                        console.log('-------already '+p.childNodes.length);
                        let nodes=p.childNodes;
                        console.log(nodes);
                        let id,chnode;
                        for(let n=0; n<nodes.length; n++){
                            if(gps[i].id==nodes[n].id){
                                console.log('gps '+gps[i].id);
                                chnode=document.getElementById(gps[i].id);
                                document.getElementById(pid).removeChild(chnode);
                                document.getElementById(pid).appendChild(chnode);       //append at last 
                                break;
                            }
                        }
                    }
                // }
            }
        }
    }
}
//---------------------------------------------------------------------------------------------
function stayPiecePrompt(){
    let turn=document.getElementById('turn-msg').innerHTML;
    let cls, arr;
    if(turn==g){
        cls='g-p';
        arr=parg;
    }
    else if(turn==r){
        cls='r-p';
        arr=parr;
    }
    else if(turn==b){
        cls='b-p';
        arr=parb;
    }
    else if(turn==y){
        cls='y-p';
        arr=pary;
    }          
    let gps=document.getElementsByClassName(cls);
    for(let i=0; i<gps.length; i++){
        let par=gps[i].parentElement;
        let pid=par.id;
        for(let j=0; j<arr.length; j++){
            if(pid==arr[j]){
                gps[i].style.border='3px solid white';
            }
        }
    }
}

//---------------------------------------------------------------------------------------------
function changeTurn(){
    vv=1;                           //disallow click pieces
    nums=[];
    let btn=document.getElementById('dice-btn');
    let turn=document.getElementById('turn-msg');
    
if(gpug==4 || rpug==4 || bpug==4 || ypug==4){
    btn.disabled=true;
    document.getElementsByTagName('img')[0].style.border='none';
}
else{
    let str=`<img id="face1" src="src/f1.jpg" alt="face1">`;
    document.getElementById('dice-btn').innerHTML=str;
    btn.disabled=false;
    document.getElementsByTagName('img')[0].style.border='none';

        if(turn.innerHTML===g){
            // console.log('red');
            btn.style.top='450px';
            turn.style.top='400px';
            turn.style.left='185px';
            turn.style.color='red';
            turn.innerHTML="Player Red's Turn";    
            document.getElementsByTagName('img')[0].style.border='5px solid red';
            gt=0;
            rt=1;
            bt=0;
            yt=0;
        }
        else if(turn.innerHTML===r){
            // console.log('blue');
            btn.style.left='1070px';
            turn.style.left='1030px';
            turn.style.color='blue';
            turn.innerHTML="Player Blue's Turn";
            document.getElementsByTagName('img')[0].style.border='5px solid blue';
            gt=0;
            rt=0;
            bt=1;
            yt=0;
        }
        else if(turn.innerHTML===b){
            // console.log('yellow');
            btn.style.top='100px';
            turn.style.top='50px';
            turn.style.color='yellow';
            turn.innerHTML="Player Yellow's Turn";
            document.getElementsByTagName('img')[0].style.border='5px solid yellow';
            gt=0;
            rt=0;
            bt=0;
            yt=1;
        }
        else if(turn.innerHTML===y){
            // console.log('green');
            btn.style.left='220px';
            turn.style.left='175px';
            turn.style.color='green';
            turn.innerHTML="Player Green's Turn";
            document.getElementsByTagName('img')[0].style.border='5px solid green';
            gt=1;
            rt=0;
            bt=0;
            yt=0;
        }
}
}
//-----------------------------------------------------------------------------------------------------
function pieceComeOut(pid, pidf, caller, turn, pp){
    //----------firts remove border of activated pieces----------
    let gps=document.getElementsByClassName(pp);    
    for(let i=0; i<gps.length; i++){
        gps[i].style.border='3px solid black';          
    }
    // let newPiece=0;             
    document.getElementById(pid).removeChild(caller);     //remove from stay area

    // if(pid==pid1 || pid==pid2 || pid==pid3 || pid==pid4){
        // newPiece=1;
        if(turn==g){
            greenp.push(caller.id);
            gbahir+=1;
            gandr-=1;
            console.log('gbahir '+gbahir);
        }
        else if(turn==r){
            redp.push(caller.id);
            rbahir+=1;
            randr-=1;
            console.log('rbahir '+rbahir);
        }
        else if(turn==b){
            bluep.push(caller.id);
            bbahir+=1;
            bandr-=1;
            console.log('bbahir '+bbahir);
        }
        else if(turn==y){
            yellowp.push(caller.id);
            ybahir+=1;
            yandr-=1;
            console.log('ybahir '+ybahir);
        }
        pid=pidf;
    // }
        let s=document.getElementById(pid);     
        caller.style.height='25px';
        caller.style.width='25px';
        caller.style.margin='4px';  
        caller.style.position='absolute';
        s.appendChild(caller);                    //add to play area
}
//------------------------------------------------------------------------------------------------
function decideTurn(caller)
{
    let btn=document.getElementById('dice-btn');
    let turn=document.getElementById('turn-msg').innerHTML;
if(vv===0)           //allowed to click pieces
{    
    let pp;
    let pid1,pid2,pid3,pid4,pidf;
    let cls,clsd;
    var turnmoves;
    var arr;
    var p1,p2,p3,p4,p5;
    if(turn==g)
    {
        pp='g-p';
        pid1='g-p1-d';
        pid2='g-p2-d';
        pid3='g-p3-d';
        pid4='g-p4-d';
        pidf='g-r1-2';
        cls='g-run-p';
        clsd='cgreen';
        arr=greenp;
        p1=gr26; p2=gr25; p3=gr24; p4=gr23; p5=gr22;
        turnmoves=[gr13,gr14,gr15,gr16,
            yr61,yr51,yr41,yr31,yr21,yr11,yr12,yr13,yr23,yr33,yr43,yr53,yr63,
            br11,br12,br13,br14,br15,br16,br26,br36,br35,br34,br33,br32,br31,
            rr13,rr23,rr33,rr43,rr53,rr63,rr62,rr61,rr51,rr41,rr31,rr21,rr11,
            gr36,gr35,gr34,gr33,gr32,gr31,gr21,gr22,gr23,gr24,gr25,gr26];
    }
    else if(turn==r)
    {
        pp='r-p';
        pid1='r-p1-d';
        pid2='r-p2-d';
        pid3='r-p3-d';
        pid4='r-p4-d';
        pidf='r-r5-1';
        cls='r-run-p';
        clsd='cred';
        arr=redp;
        p1=rr12; p2=rr22; p3=rr32; p4=rr42; p5=rr52;
        turnmoves=[rr41,rr31,rr21,rr11,
            gr36,gr35,gr34,gr33,gr32,gr31,gr21,gr11,gr12,gr13,gr14,gr15,gr16,
            yr61,yr51,yr41,yr31,yr21,yr11,yr12,yr13,yr23,yr33,yr43,yr53,yr63,
            br11,br12,br13,br14,br15,br16,br26,br36,br35,br34,br33,br32,br31,
            rr13,rr23,rr33,rr43,rr53,rr63,rr62,rr52,rr42,rr32,rr22,rr12];
    }
    else if(turn==b)
    {
        pp='b-p';
        pid1='b-p1-d';
        pid2='b-p2-d';
        pid3='b-p3-d';
        pid4='b-p4-d';
        pidf='b-r3-5';
        cls='b-run-p';
        clsd='cblue';
        arr=bluep;
        p1=br21; p2=br22; p3=br23; p4=br24; p5=br25;
        turnmoves=[br34,br33,br32,br31,
            rr13,rr23,rr33,rr43,rr53,rr63,rr62,rr61,rr51,rr41,rr31,rr21,rr11,
            gr36,gr35,gr34,gr33,gr32,gr31,gr21,gr11,gr12,gr13,gr14,gr15,gr16,
            yr61,yr51,yr41,yr31,yr21,yr11,yr12,yr13,yr23,yr33,yr43,yr53,yr63,
            br11,br12,br13,br14,br15,br16,br26,br25,br24,br23,br22,br21];
    }
    else if(turn==y)
    {
        pp='y-p';
        pid1='y-p1-d';
        pid2='y-p2-d';
        pid3='y-p3-d';
        pid4='y-p4-d';
        pidf='y-r2-3';
        cls='y-run-p';
        clsd='cyellow';
        arr=yellowp;
        p1=yr62; p2=yr52; p3=yr42; p4=yr32; p5=yr22;
        turnmoves=[yr33,yr43,yr53,yr63,
            br11,br12,br13,br14,br15,br16,br26,br36,br35,br34,br33,br32,br31,
            rr13,rr23,rr33,rr43,rr53,rr63,rr62,rr61,rr51,rr41,rr31,rr21,rr11,
            gr36,gr35,gr34,gr33,gr32,gr31,gr21,gr11,gr12,gr13,gr14,gr15,gr16,
            yr61,yr51,yr41,yr31,yr21,yr11,yr12,yr22,yr32,yr42,yr52,yr62];
    }

     //-----------------------------------
     let parent=caller.parentElement;
     let pid=parent.id;
     if((pid==pid1 || pid==pid2 || pid==pid3 || pid==pid4) && (rand<6)){
     }
     else if((pid==pid1 || pid==pid2 || pid==pid3 || pid==pid4) && (rand===6)){
        pieceComeOut(pid, pidf, caller, turn, pp);
        enableBtn();
     }
     else{
         let rnd=rand;
        if((rnd===6) && (pid==p1 || pid==p2 || pid==p3 || pid==p4 || pid==p5)){}
        else if((rnd===5) && (pid==p1 || pid==p2 || pid==p3 || pid==p4)){}
        else if((rnd===4) && (pid==p1 || pid==p2 || pid==p3)){}
        else if((rnd===3) && (pid==p1 || pid==p2)){}
        else if((rnd===2) && (pid==p1)){}
        else
        {
            movePiece(pidf, turnmoves, caller, pp);
            if(rand===6){          //again roll
                enableBtn();
            }
            else{
             changeTurn();
            }
        }        
     }      
}
}
//---------------------------------------------------------------------------------------------
function enableBtn()
{
    let btn=document.getElementById('dice-btn');
    let turn=document.getElementById('turn-msg').innerHTML;
    btn.disabled=false;
    document.getElementsByTagName('img')[0].style.border='none';
    if(turn==g)
    {
        document.getElementsByTagName('img')[0].style.border='5px solid green';
    }
    else if(turn==r)
    {
        document.getElementsByTagName('img')[0].style.border='5px solid red';
    }
    else if(turn==b)
    {
        document.getElementsByTagName('img')[0].style.border='5px solid blue';
    }
    else if(turn==y)
    {
        document.getElementsByTagName('img')[0].style.border='5px solid yellow';
    }
    vv=1;           //disallow click pieces
}
//--------------------------------------------------------------------------------------------------------
function movePiece(pidf, turnmoves, caller, pp)
{
        //----------firts remove border of activated pieces----------
        let gps=document.getElementsByClassName(pp);    
        for(let i=0; i<gps.length; i++){
                gps[i].style.border='3px solid black';          
        }
        var ids=[];
//---------------------movement
            var count=rand;
            var sourceid;
            var desid;
            let parent=caller.parentElement;        //! imp
            let pid=parent.id;
                if(pid==pidf){
                    // console.log('---------------------start');                           //just came from stay area
                    for(let j=0; j<count; j++){
                        ids.push(turnmoves[j]);          //fill 6 size array
                    }
                    sourceid=turnmoves[0];
                    desid=turnmoves[count-1];
                }
                else{
                    let idf;
                    for(let p=0; p<turnmoves.length; p++){
                        if(pid==turnmoves[p]){
                            idf=p;
                            break;
                        }
                    }
                    for(let j=idf+1; j<=idf+count; j++){
                        ids.push(turnmoves[j]);          //fill 6 size array
                    }
                    sourceid=turnmoves[idf];
                    desid=turnmoves[idf+count];
                }
                parent.removeChild(caller);
                desid=null;
                if(desid!=null){
                    document.getElementById(desid).appendChild(caller);
                    killPiece(desid,caller);               //check to kill
                }
                else {
                    pug(pp,caller);
                }
                // let time=0;
                // for(let i=0; i<count; i++){
                //     console.log('loop' + count);
                //     setTimeout(() => {
                //         parent.removeChild(caller);
                //         document.getElementById(ids[i]).appendChild(caller);
                //         parent=caller.parentElement;
                //     }, time=100);
                // }
}
//------------------------------------------------------------------------------------------------
function pug(pp,caller){
    let str=`<img id=winsmall src=src/first.png alt=WIN>`;
    let v=`${caller.id}-d`;
    if(pp=='g-p'){
        gpug+=1;
        gbahir-=1;
        console.log('gbahir '+gbahir);
        // gpug=4;
        for(let i=0; i<parg.length; i++){
            let p=document.getElementById(parg[i]);
            if(p.id==v){
                p.innerHTML=str;
                break;
            }
        }
        if(gpug==4){
            gameWin(pp);
        }
    }
    if(pp=='r-p'){
        rpug+=1;
        rbahir-=1;
        console.log('rbahir '+rbahir);
        for(let i=0; i<parr.length; i++){
            let p=document.getElementById(parr[i]);
            if(p.id==v){
                p.innerHTML=str;
                break;
            }
        }
        if(rpug==4){
            gameWin(pp);
        }
    }
    if(pp=='y-p'){
        ypug+=1;
        ybahir-=1;
        console.log('ybahir '+ybahir);
        for(let i=0; i<pary.length; i++){
            let p=document.getElementById(pary[i]);
            if(p.id==v){
                p.innerHTML=str;
                break;
            }
        }
        if(ypug==4){
            gameWin(pp);
        }
    }
    if(pp=='b-p'){
        bpug+=1;
        bbahir-=1;
        console.log('bbahir '+bbahir);
        for(let i=0; i<parb.length; i++){
            let p=document.getElementById(parb[i]);
            if(p.id==v){
                p.innerHTML=str;
                break;
            }
        }
        if(bpug==4){
            gameWin(pp);
        }
    }
}
//---------------------------------------------------------------------------------------------
function gameWin(pp){
    console.log('win')
    let str=`<img id=win src=src/first.png alt=WIN>`;

    if(pp=='g-p'){
        document.getElementById('green').style.opacity='0.7';
        document.getElementById('green').innerHTML+=str;
    }
    if(pp=='r-p'){
        document.getElementById('red').style.opacity='0.7';
        document.getElementById('red').innerHTML+=str;
    }
    if(pp=='b-p'){
        document.getElementById('blue').style.opacity='0.7';
        document.getElementById('blue').innerHTML+=str;
    }
    if(pp=='y-p'){
        document.getElementById('yellow').style.opacity='0.7';
        document.getElementById('yellow').innerHTML+=str;
    }
    disableDice();              //game endddd
    vv=1;
}
//---------------------------------------------------------------------------------------------
function killPiece(desid,caller){
            
    let p=document.getElementById(desid);
    let l=p.childNodes.length;
    let cheta=cheeta(desid);
    console.log('cheta: '+cheta);
    if(cheta){
    }
    else{
        l=document.getElementById(desid).childNodes.length;
        console.log('else '+l);
    if(l>1)
    {
        console.log('yes child node');
        console.log('child nodes length: '+l);
        
        let list=p.childNodes;
        let ch1=list[0];         //got id of dead pice
        let ch1id=ch1.id;

        console.log('ch1id '+ch1id);

        let clsb=ch1id.charAt(0);
        let clsa=caller.id.charAt(0);

        console.log('clsb '+clsb);
        console.log('clsa '+clsa);

        if(clsb!=clsa){                             //if they are not of same class
            let ch=document.getElementById(ch1id);
            p.removeChild(ch1);                         

            ch.style.height='45px';
            ch.style.width='45px';
            ch.style.margin='10px'; 
            document.getElementById(`${ch1id}-d`).appendChild(ch1);         //add to stay area

            //pop from live arrray
            goHome(clsb);
        }
    }
    }
}
//---------------------------------------------------------------------------------------------
function goHome(clsb){
    // let clsb=ch1id.charAt(0);
    if(clsb=='g'){
        gbahir-=1;
        gandr+=1;
        console.log('gbahir '+gbahir);
    }
    if(clsb=='r'){
        rbahir-=1;
        randr+=1;
        console.log('rbahir '+rbahir);
    }
    if(clsb=='b'){
        bbahir-=1;
        bandr+=1;
        console.log('bbahir '+bbahir);
    }
    if(clsb=='y'){
        ybahir-=1;
        yandr+=1;
        console.log('ybahir '+ybahir);
    }
}
//---------------------------------------------------------------------------------------------
function cheeta(pid){
    let arr=['g-r1-2','g-r3-3','y-r3-1','y-r2-3','b-r1-4','b-r3-5','r-r5-1','r-r4-3'];
    for(let i=0; i<arr.length; i++){
        if(pid==arr[i]){
            return true;
        }
    }
    return false;
}








