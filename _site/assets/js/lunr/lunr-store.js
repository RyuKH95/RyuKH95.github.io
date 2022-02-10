var store = [{
        "title": "first",
        "excerpt":"  ","categories": [],
        "tags": [],
        "url": "/first/",
        "teaser": null
      },{
        "title": "[MySQL]콘솔에서 DB접속 방법",
        "excerpt":"로컬 접속 mysql -u root -p 원격지 접속 mysql -h 원격지주소 -P 포트번호 -u 계정명 -p ex) mysql -h tistory.com -P 1111 -u itgh -p DB접속 use DB명 ex) use itgh 원격지 DB 바로 접속 mysql -h ‘주소’ -P 포트번호 -u 계정명 -p DB명 ex) mysql -h tistory.com -P 1111...","categories": ["Database"],
        "tags": ["MySQL","MariaDB","DB"],
        "url": "/database/mysql_ssh/",
        "teaser": null
      },{
        "title": "M1 맥북 homebrew 설치방법",
        "excerpt":"   1. homebrew 파일 다운받기(붙여넣기)  /bin/bash -c \"$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)   2. homebrew 설치  1)user_id에 자신의 계정명 넣기   2)아래 두줄 붙여넣기  echo 'eval \"$(/opt/homebrew/bin/brew shellenv)\"' &gt;&gt; /Users/&lt;user_id&gt;/.zprofile eval \"$(/opt/homebrew/bin/brew shellenv)\"   3. homebrew version 확인  brew —version  ","categories": ["Mac"],
        "tags": ["M1","Macbook","homebrew","brew"],
        "url": "/mac/m1-homebrew-install/",
        "teaser": null
      },{
        "title": "[Oracle]ORA-01033 에러 발생 시",
        "excerpt":"   cmd  C:\\&gt;SQLPLUS   접속 계정으로 로그인 안될 시  /as sysdba  recover database;  --복구 완료 이후 alter database open;   if ORA-00600 에러 발생 시 :    recover database using backup controlfile until cancel;  --복구 전으로 취소   cancel   alter database open resetlogs; --REDO LOG 리셋   shutdown immediate;   startup  else :    shutdown immediate;   startup  ","categories": ["Database"],
        "tags": ["Oracle","DB","ORA-01033"],
        "url": "/database/ora-01033/",
        "teaser": null
      },{
        "title": "[백준] 2577",
        "excerpt":"문제   import java.io.*;  class Main {  public static void main(String[] args) { System.out.println(\"Hello World!\");     } }  ","categories": ["Baekjoon"],
        "tags": ["Baekjoon","Hello World!"],
        "url": "/baekjoon/Baekjoon-2577/",
        "teaser": null
      }]
