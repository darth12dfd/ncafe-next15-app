# 멋쟁이 사자처럼 NextJs 실습


## Rest api

* 자원을 이름지어 구분하고 그 상태를 주고받는 방식

api /menus
    /menus/  :method : POST
    /menus/2
    /menus/3 :method : PUT
    /menus/3 :method : DELETE

app 
//메뉴 관리 시스템
    /admin/menus
    /admin/menus/new or create
    /admin/menus/3
    /admin/menus/3/edit
    /admin/menus/3/delete

//메뉴 조회 시스템
    /menus
    /menus/3
//좋아요 시스템
    /member/likes
//평가 시스템

## 제어의 역전

- 객체 생성의 흐름이 뒤집어진 것
