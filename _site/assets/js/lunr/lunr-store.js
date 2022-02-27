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
        "excerpt":"문제  Hello World!를 출력하시오.   코드  import java.io.*;  class Main {     public static void main(String[] args) {         System.out.println(\"Hello World!\");     } }  ","categories": ["Baekjoon"],
        "tags": ["Baekjoon","Hello World!"],
        "url": "/baekjoon/bj-2577/",
        "teaser": null
      },{
        "title": "[백준] 10718",
        "excerpt":"문제  두 줄에 걸쳐 “강한친구 대한육군”을 한 줄에 한 번씩 출력한다.   코드  import java.io.*;  class Main {     public static void main(String[] args) {         System.out.println(\"강한친구 대한육군\");         System.out.println(\"강한친구 대한육군\");     } }  ","categories": ["Baekjoon"],
        "tags": ["Baekjoon"],
        "url": "/baekjoon/bj-10718/",
        "teaser": null
      },{
        "title": "[백준] 1000",
        "excerpt":"문제 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오. 입력 첫째 줄에 A와 B가 주어진다. (0 &lt; A, B &lt; 10) 출력 첫째 줄에 A+B를 출력한다. 코드 import java.util.*; public class Main{ public static void main(String args[]){ Scanner sc = new Scanner(System.in); int a, b; a = sc.nextInt();...","categories": ["Baekjoon"],
        "tags": ["Baekjoon"],
        "url": "/baekjoon/bj-1000/",
        "teaser": null
      },{
        "title": "[백준] 10171",
        "excerpt":"문제  아래 예제와 같이 고양이를 출력하시오.  \\    /\\    )  ( ')   (  /  )    \\(__)|     코드  import java.io.*;  class Main {     public static void main(String[] args) {         System.out.println(\"\\\\    /\\\\\");         System.out.println(\" )  ( \\')\");         System.out.println(\"(  /  )\");         System.out.println(\" \\\\(__)|\");     } }  ","categories": ["Baekjoon"],
        "tags": ["Baekjoon"],
        "url": "/baekjoon/bj-10171/",
        "teaser": null
      },{
        "title": "[백준] 10172",
        "excerpt":"문제  아래 예제와 같이 개를 출력하시오.  |\\_/|   |q p|   /}   ( 0 )\"\"\"\\   |\"^\"`    |   ||_/=\\\\__|     코드  import java.io.*;  class Main {     public static void main(String[] args) {         System.out.println(\"|\\\\_/|\");         System.out.println(\"|q p|   /}\");         System.out.println(\"( 0 )\\\"\\\"\\\"\\\\\");         System.out.println(\"|\\\"^\\\"`    |\");         System.out.println(\"||_/=\\\\\\\\__|\");     } }  ","categories": ["Baekjoon"],
        "tags": ["Baekjoon"],
        "url": "/baekjoon/bj-10172/",
        "teaser": null
      },{
        "title": "[백준] 1001",
        "excerpt":"문제 두 정수 A와 B를 입력받은 다음, A-B를 출력하는 프로그램을 작성하시오. 입력 첫째 줄에 A와 B가 주어진다. (0 &lt; A, B &lt; 10) 출력 첫째 줄에 A-B를 출력한다. 코드 import java.util.*; public class Main{ public static void main(String args[]){ Scanner sc = new Scanner(System.in); int a, b; a = sc.nextInt();...","categories": ["Baekjoon"],
        "tags": ["Baekjoon"],
        "url": "/baekjoon/bj-1001/",
        "teaser": null
      },{
        "title": "[백준] 10998",
        "excerpt":"문제 두 정수 A와 B를 입력받은 다음, A×B를 출력하는 프로그램을 작성하시오. 입력 첫째 줄에 A와 B가 주어진다. (0 &lt; A, B &lt; 10) 출력 첫째 줄에 A×B를 출력한다. 코드 import java.util.*; public class Main{ public static void main(String args[]){ Scanner sc = new Scanner(System.in); int a, b; a = sc.nextInt();...","categories": ["Baekjoon"],
        "tags": ["Baekjoon"],
        "url": "/baekjoon/bj-10998/",
        "teaser": null
      },{
        "title": "[백준] 1008",
        "excerpt":"문제 두 정수 A와 B를 입력받은 다음, A/B를 출력하는 프로그램을 작성하시오. 입력 첫째 줄에 A와 B가 주어진다. (0 &lt; A, B &lt; 10) 출력 첫째 줄에 A/B를 출력한다. 실제 정답과 출력값의 절대오차 또는 상대오차가 10-9 이하이면 정답이다. 코드 import java.util.*; public class Main{ public static void main(String args[]){ Scanner sc...","categories": ["Baekjoon"],
        "tags": ["Baekjoon"],
        "url": "/baekjoon/bj-1008/",
        "teaser": null
      },{
        "title": "[백준] 10869",
        "excerpt":"문제 두 자연수 A와 B가 주어진다. 이때, A+B, A-B, A*B, A/B(몫), A%B(나머지)를 출력하는 프로그램을 작성하시오. 입력 두 자연수 A와 B가 주어진다. (1 ≤ A, B ≤ 10,000) 출력 첫째 줄에 A+B, 둘째 줄에 A-B, 셋째 줄에 A*B, 넷째 줄에 A/B, 다섯째 줄에 A%B를 출력한다. 코드 import java.util.*; public class Main{...","categories": ["Baekjoon"],
        "tags": ["Baekjoon"],
        "url": "/baekjoon/bj-10869/",
        "teaser": null
      },{
        "title": "[백준] 10926",
        "excerpt":"문제 준하는 사이트에 회원가입을 하다가 joonas라는 아이디가 이미 존재하는 것을 보고 놀랐다. 준하는 놀람을 ??!로 표현한다. 준하가 가입하려고 하는 사이트에 이미 존재하는 아이디가 주어졌을 때, 놀람을 표현하는 프로그램을 작성하시오. 입력 첫째 줄에 준하가 가입하려고 하는 사이트에 이미 존재하는 아이디가 주어진다. 아이디는 알파벳 소문자로만 이루어져 있으며, 길이는 50자를 넘지 않는다. 출력...","categories": ["Baekjoon"],
        "tags": ["Baekjoon"],
        "url": "/baekjoon/bj-10926/",
        "teaser": null
      },{
        "title": "[백준] 18108",
        "excerpt":"1998년생인 내가 태국에서는 2541년생?! 문제 ICPC Bangkok Regional에 참가하기 위해 수완나품 국제공항에 막 도착한 팀 레드시프트 일행은 눈을 믿을 수 없었다. 공항의 대형 스크린에 올해가 2562년이라고 적혀 있던 것이었다. 불교 국가인 태국은 불멸기원(佛滅紀元), 즉 석가모니가 열반한 해를 기준으로 연도를 세는 불기를 사용한다. 반면, 우리나라는 서기 연도를 사용하고 있다. 불기 연도가...","categories": ["Baekjoon"],
        "tags": ["Baekjoon"],
        "url": "/baekjoon/bj-18108/",
        "teaser": null
      },{
        "title": "[백준] 10430",
        "excerpt":"문제 (A+B)%C는 ((A%C) + (B%C))%C 와 같을까? 세 수 A, B, C가 주어졌을 때, 위의 네 가지 값을 구하는 프로그램을 작성하시오. 입력 첫째 줄에 A, B, C가 순서대로 주어진다. (2 ≤ A, B, C ≤ 10000) 출력 첫째 줄에 (A+B)%C, 둘째 줄에 ((A%C) + (B%C))%C, 셋째 줄에 (A×B)%C, 넷째 줄에...","categories": ["Baekjoon"],
        "tags": ["Baekjoon"],
        "url": "/baekjoon/bj-10430/",
        "teaser": null
      },{
        "title": "[백준] 2588",
        "excerpt":"문제 (세 자리 수) × (세 자리 수)는 다음과 같은 과정을 통하여 이루어진다. (1)과 (2)위치에 들어갈 세 자리 자연수가 주어질 때 (3), (4), (5), (6)위치에 들어갈 값을 구하는 프로그램을 작성하시오. 입력 첫째 줄에 (1)의 위치에 들어갈 세 자리 자연수가, 둘째 줄에 (2)의 위치에 들어갈 세자리 자연수가 주어진다. 출력 첫째 줄부터...","categories": ["Baekjoon"],
        "tags": ["Baekjoon"],
        "url": "/baekjoon/bj-2588/",
        "teaser": null
      },{
        "title": "[백준] 1330",
        "excerpt":"문제 두 정수 A와 B가 주어졌을 때, A와 B를 비교하는 프로그램을 작성하시오. 입력 첫째 줄에 A와 B가 주어진다. A와 B는 공백 한 칸으로 구분되어져 있다. 출력 첫째 줄에 다음 세 가지 중 하나를 출력한다. A가 B보다 큰 경우에는 ‘&gt;’를 출력한다. A가 B보다 작은 경우에는 ‘&lt;’를 출력한다. A와 B가 같은 경우에는...","categories": ["Baekjoon"],
        "tags": ["Baekjoon"],
        "url": "/baekjoon/bj-1330/",
        "teaser": null
      },{
        "title": "[백준] 9498",
        "excerpt":"문제 시험 점수를 입력받아 90 ~ 100점은 A, 80 ~ 89점은 B, 70 ~ 79점은 C, 60 ~ 69점은 D, 나머지 점수는 F를 출력하는 프로그램을 작성하시오. 입력 첫째 줄에 시험 점수가 주어진다. 시험 점수는 0보다 크거나 같고, 100보다 작거나 같은 정수이다. 출력 시험 성적을 출력한다. 코드 import java.util.*; public class...","categories": ["Baekjoon"],
        "tags": ["Baekjoon"],
        "url": "/baekjoon/bj-9498/",
        "teaser": null
      },{
        "title": "[백준] 2753",
        "excerpt":"문제 연도가 주어졌을 때, 윤년이면 1, 아니면 0을 출력하는 프로그램을 작성하시오. 윤년은 연도가 4의 배수이면서, 100의 배수가 아닐 때 또는 400의 배수일 때이다. 예를 들어, 2012년은 4의 배수이면서 100의 배수가 아니라서 윤년이다. 1900년은 100의 배수이고 400의 배수는 아니기 때문에 윤년이 아니다. 하지만, 2000년은 400의 배수이기 때문에 윤년이다. 입력 첫째 줄에...","categories": ["Baekjoon"],
        "tags": ["Baekjoon"],
        "url": "/baekjoon/bj-2753/",
        "teaser": null
      },{
        "title": "[백준] 14681",
        "excerpt":"문제 흔한 수학 문제 중 하나는 주어진 점이 어느 사분면에 속하는지 알아내는 것이다. 사분면은 아래 그림처럼 1부터 4까지 번호를 갖는다. “Quadrant n”은 “제n사분면”이라는 뜻이다. 예를 들어, 좌표가 (12, 5)인 점 A는 x좌표와 y좌표가 모두 양수이므로 제1사분면에 속한다. 점 B는 x좌표가 음수이고 y좌표가 양수이므로 제2사분면에 속한다. 점의 좌표를 입력받아 그 점이...","categories": ["Baekjoon"],
        "tags": ["Baekjoon"],
        "url": "/baekjoon/bj-14681/",
        "teaser": null
      },{
        "title": "[백준] 2884",
        "excerpt":"문제 상근이는 매일 아침 알람을 듣고 일어난다. 알람을 듣고 바로 일어나면 다행이겠지만, 항상 조금만 더 자려는 마음 때문에 매일 학교를 지각하고 있다. 상근이는 모든 방법을 동원해보았지만, 조금만 더 자려는 마음은 그 어떤 것도 없앨 수가 없었다. 이런 상근이를 불쌍하게 보던, 창영이는 자신이 사용하는 방법을 추천해 주었다. 바로 “45분 일찍 알람...","categories": ["Baekjoon"],
        "tags": ["Baekjoon"],
        "url": "/baekjoon/bj-2884/",
        "teaser": null
      },{
        "title": "[백준] 2525",
        "excerpt":"문제 KOI 전자에서는 건강에 좋고 맛있는 훈제오리구이 요리를 간편하게 만드는 인공지능 오븐을 개발하려고 한다. 인공지능 오븐을 사용하는 방법은 적당한 양의 오리 훈제 재료를 인공지능 오븐에 넣으면 된다. 그러면 인공지능 오븐은 오븐구이가 끝나는 시간을 분 단위로 자동적으로 계산한다. 또한, KOI 전자의 인공지능 오븐 앞면에는 사용자에게 훈제오리구이 요리가 끝나는 시각을 알려 주는...","categories": ["Baekjoon"],
        "tags": ["Baekjoon"],
        "url": "/baekjoon/bj-2525/",
        "teaser": null
      },{
        "title": "[백준] 2480",
        "excerpt":"문제 1에서부터 6까지의 눈을 가진 3개의 주사위를 던져서 다음과 같은 규칙에 따라 상금을 받는 게임이 있다. 1.같은 눈이 3개가 나오면 10,000원+(같은 눈)×1,000원의 상금을 받게 된다. 2.같은 눈이 2개만 나오는 경우에는 1,000원+(같은 눈)×100원의 상금을 받게 된다. 3.모두 다른 눈이 나오는 경우에는 (그 중 가장 큰 눈)×100원의 상금을 받게 된다. 예를 들어,...","categories": ["Baekjoon"],
        "tags": ["Baekjoon"],
        "url": "/baekjoon/bj-2480/",
        "teaser": null
      },{
        "title": "[백준] 2739",
        "excerpt":"문제 N을 입력받은 뒤, 구구단 N단을 출력하는 프로그램을 작성하시오. 출력 형식에 맞춰서 출력하면 된다. 입력 첫째 줄에 N이 주어진다. N은 1보다 크거나 같고, 9보다 작거나 같다. 출력 출력형식과 같게 N * 1 부터 N * 9 까지 출력한다. 코드 import java.util.*; public class Main{ public static void main(String args[]){ Scanner...","categories": ["Baekjoon"],
        "tags": ["Baekjoon"],
        "url": "/baekjoon/bj-2739/",
        "teaser": null
      }]
