let gallery = [
    {
        id: 1,
        url: 'slika2.jpg',
        likes: 123,
        comments:['eden','dva', 'tri'],
        liked: 0,
    },
    {
        id: 2,
        url: 'slika3.jpg',
        likes: 12,
        comments:['test1', 'test2'],
        liked: 0
    }
];

window.onload = function(){
    load();
};
function load() {
    createGallery();
    createFunctions();
    createCommentFunctions();
}

function createGallery(){

    let gal = document.getElementById("gg");
    let gall = document.createElement("div");
    gall.id = "tatko";
    gallery.forEach(element => {
        const paren = document.createElement("div");
        paren.className += "sliki";
        paren.id = element.id;
        //ovoa e za slika
        const slika = document.createElement("img");
        slika.src = element.url;
        slika.style.width = '500px';
        slika.style.height = '300px';
        paren.appendChild(slika);

        //Lajkovi 
        const cont = document.createElement("div");
        cont.style.display = 'inline';
        cont.style.alignItems = 'center';

        const lajk = document.createElement("img");

        const likes = document.createElement("div");
        likes.innerHTML= element.likes;
        lajk.src= "https://i.stack.imgur.com/Ui4gd.png";
        lajk.style.width = "30px";
        lajk.style.height = "30px";
        lajk.style.position = "relative";
        lajk.style.top = '20px';
        lajk.style.left = '5px';

        cont.appendChild(likes);
        cont.appendChild(lajk);

        paren.appendChild(cont);
        paren.appendChild(document.createElement('hr'));
        
        // Comments
        const kom_parent = document.createElement("div");
        const title = document.createElement("p");
        var i = document.createElement("input"); //input element, text
        i.setAttribute('type',"text");
        i.setAttribute('name',"username");
        i.placeholder = "Search comment.."
        i.id = "filtriraj";
        i.style.float = 'right';
        var x = document.createElement("p");
        x.innerHTML = "Search for comments: "
        x.style.textAlign = 'right';
        title.innerHTML = "Comments: ";
        title.style.float = "left";
        kom_parent.appendChild(x);
        kom_parent.appendChild(i);
        kom_parent.appendChild(document.createElement('br'));
        kom_parent.appendChild(title);
        kom_parent.appendChild(document.createElement('br'));

        element.comments.forEach((el, index) => {
            kom = document.createElement('div');
            kom.innerHTML = el;
            kom.style.border = "1px solid"; 
            if (index == 0)
                kom.style.marginTop = '50px';
            kom_parent.appendChild(kom);
        });
        kom_parent.id = "komentari";
        paren.appendChild(kom_parent);
  
        let textarea = document.createElement("Textarea");
        textarea.rows = 10;
        textarea.cols = 50;
        let btt = document.createElement("button");
        btt.innerHTML = "Comment";


        paren.appendChild(textarea);
        paren.appendChild(btt);


        gall.appendChild(paren);

    });
    gal.appendChild(gall);

}
function createFunctions() {
    gallery.forEach((element,index) => {
        let tem = document.getElementById(element.id).childNodes[1].childNodes[1];
        tem.addEventListener("click",lajkni.bind(null,element));
    });
}

function createCommentFunctions() {
    gallery.forEach((element,index) => {
        let tem = document.getElementById(element.id).childNodes[5];
        tem.addEventListener("click",komentiraj.bind(null,element));
    });
}

function lajkni(param) {
    let help = document.getElementById(param.id).childNodes[1];

    if (gallery[param.id - 1].liked == 1) {
        help.childNodes[1].src = 'https://i.stack.imgur.com/Ui4gd.png';
        help.childNodes[0].innerHTML = parseInt(help.childNodes[0].innerHTML) - 1;
        gallery[param.id - 1].liked = 0;
    }
    else {
        help.childNodes[1].src = 'https://pngimg.com/uploads/heart/heart_PNG51341.png';
        help.childNodes[0].innerHTML = parseInt(help.childNodes[0].innerHTML) + 1;
        gallery[param.id - 1].liked = 1;
    }

}

function komentiraj(param) {
    let kom = document.getElementById(param.id).childNodes[4].value;
    gallery[param.id - 1].comments.push(kom);

    let  komm = document.createElement('div');
    komm.innerHTML = kom;
    komm.style.border = "1px solid"; 

    if (document.getElementById(param.id).childNodes[3].childElementCount  <= 1)
        komm.style.marginTop = "50px";
    document.getElementById(param.id).childNodes[3].appendChild(komm);    
}

function addNewPhoto() {
    document.getElementById("addKopce").style.display = "none";
    let input = document.createElement("input");
    input.style.position = "relative";
    input.style.right = "10px";
    input.id = 'novPhoto';
    let kopce = document.createElement("button");
    kopce.id = "kopceSlika";
    kopce.innerHTML = "Add Photo";
    kopce.addEventListener("click", addPhoto);
    let parent = document.getElementById('novaSlika');

    parent.appendChild(input);
    parent.appendChild(kopce);
}

function addPhoto() {
    let url = document.getElementById('novPhoto').value;
    gallery.push({
        id: gallery.length + 1,
        url: url,
        likes: 0,
        comments: [],
        liked: 0
    });

    document.getElementById("addKopce").style.display = "inline";
    document.getElementById('kopceSlika').style.display = 'none';
    document.getElementById('novPhoto').style.display = 'none';

    document.getElementById('tatko').innerHTML = '';
    load();
}


