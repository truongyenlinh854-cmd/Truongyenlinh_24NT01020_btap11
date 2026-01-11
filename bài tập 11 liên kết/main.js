animals = [
    { ten: "Sói", anh: "image/wolf/wolfbgr.PNG",mota:"sói là một loài động vật đáng sợ", thuvien: ["image/wolf/wolf_1.PNG", "image/wolf/wolf_2.PNG", "image/wolf/wolf_3.PNG",
        "image/wolf/wolf_4.PNG", "image/wolf/wolf_5.PNG", "image/wolf/wolf_6.PNG", "image/wolf/wolf_7.PNG","image/wolf/wolf_8.PNG"
    ] },
    { ten: "Cáo", anh: "image/Fox/foxbgr.PNG",mota:"cáo là một người bạn", thuvien: ["image/Fox/fox_1.PNG", "image/Fox/fox_2.PNG", "image/Fox/fox_3.PNG",
        "image/Fox/fox_4.PNG", "image/Fox/fox_5PNG.PNG", "image/Fox/fox_6PNG.PNG", "image/Fox/fox_7PNG.PNG","image/Fox/fox_8.PNG"
    ] },
    { ten: "Chó", anh: "image/dog/tải xuốngbgr.PNG",mota:"chó là một động vật chung thành", thuvien: ["image/dog/images (1).PNG", "image/dog/images (2).PNG", "image/dog/images (3).PNG",
        "image/dog/images (4).PNG", "image/dog/images (5).PNG", "image/dog/images6.PNG", "image/dog/tải xuống 7.PNG","image/dog/tải xuống8.PNG"
    ] },
    { ten: "Dê", anh: "image/goat/goatbgr.PNG",mota:"dê là một loài động vật vui nhộn", thuvien: ["image/goat/goat_1.PNG", "image/goat/goat_2.PNG", "image/goat/goat_3.PNG",
        "image/goat/goat_4.PNG", "image/goat/goat_5.PNG", "image/goat/goat_6.PNG", "image/goat/goat_7.PNG","image/goat/goat_8.PNG"
    ] },
    { ten: "Rồng", anh: "image/dragon/dragonbgr.PNG",mota:"rồng là một loài động vật quý giá", thuvien: ["image/dragon/dragon_1.PNG", "image/dragon/dragon_2.PNG", "image/dragon/dragon_3.PNG",
        "image/dragon/dragon_4.PNG", "image/dragon/dragon_5.PNG", "image/dragon/dragon_6.PNG", "image/dragon/dragon_7.PNG","image/dragon/dragon_8.PNG"
    ] }
];
const animalListDiv = document.getElementById('animalList');
if (animalListDiv) {
    animals.forEach(animal => {
        const card = document.createElement('div');
        card.className = 'animal-card';
        card.innerHTML = `
            <img src="${animal.anh}" alt="${animal.ten}">
            <h3>${animal.ten}</h3>
        `;
        card.onclick = function() {
            localStorage.setItem('selectedAnimal', JSON.stringify(animal));
            window.location.href = 'detail.html';
        };
        animalListDiv.appendChild(card);
    });
}