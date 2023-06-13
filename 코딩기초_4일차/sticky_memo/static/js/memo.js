// DOM 요소
const $modalwrap = document.querySelector(".modal-wrap");
const $newbutton = document.querySelector(".new-btn");
const $closebutton = document.querySelector('.close-btn');
const $openbutton = document.querySelector(".open-btn");
const $deletebutton = document.querySelector(".delete-btn");
const $title = document.querySelector(".title")
// .new-btn 클릭시, .modal-wrap의 hidden 클래스 없애기

$title.classList.add('change-color')
const remove = ()=> {
    $modalwrap.classList.remove('hidden');
};
const add = ()=> {
    $modalwrap.classList.add("hidden");
}

$newbutton.addEventListener("click", ()=> {remove()
});
$closebutton.addEventListener("click", ()=> {
    add();
})
$openbutton.addEventListener("click", ()=> {remove()
})
$deletebutton.addEventListener("click", ()=> {
    confirm('정말 삭제하시겠습니까?');
})


// .close-btn 클릭시, .modal-wrap에 hidden 클래스 추가
// 힌트) remove대신 add 사용하기

// .open-btn 클릭시, .modal-wrap의 hidden 클래스 없애기

// .delete-btn 클릭시, 삭제 여부 물어보는 창 띄워주기
