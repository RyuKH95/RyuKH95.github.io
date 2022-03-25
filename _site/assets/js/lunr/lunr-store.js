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
      },{
        "title": "[백준] 10950",
        "excerpt":"문제 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오. 입력 첫째 줄에 테스트 케이스의 개수 T가 주어진다. 각 테스트 케이스는 한 줄로 이루어져 있으며, 각 줄에 A와 B가 주어진다. (0 &lt; A, B &lt; 10) 출력 각 테스트 케이스마다 A+B를 출력한다. 코드 import java.util.*; public class Main{ public...","categories": ["Baekjoon"],
        "tags": ["Baekjoon"],
        "url": "/baekjoon/bj-10950/",
        "teaser": null
      },{
        "title": "[백준] 8393",
        "excerpt":"문제 n이 주어졌을 때, 1부터 n까지 합을 구하는 프로그램을 작성하시오. 입력 첫째 줄에 n (1 ≤ n ≤ 10,000)이 주어진다. 출력 1부터 n까지 합을 출력한다. 코드 import java.util.*; public class Main{ public static void main(String args[]){ Scanner sc = new Scanner(System.in); int a, sum=0; a = sc.nextInt(); for(int i=1; i&lt;=a;...","categories": ["Baekjoon"],
        "tags": ["Baekjoon"],
        "url": "/baekjoon/bj-8393/",
        "teaser": null
      },{
        "title": "[백준] 15552",
        "excerpt":"문제 본격적으로 for문 문제를 풀기 전에 주의해야 할 점이 있다. 입출력 방식이 느리면 여러 줄을 입력받거나 출력할 때 시간초과가 날 수 있다는 점이다. C++을 사용하고 있고 cin/cout을 사용하고자 한다면, cin.tie(NULL)과 sync_with_stdio(false)를 둘 다 적용해 주고, endl 대신 개행문자(\\n)를 쓰자. 단, 이렇게 하면 더 이상 scanf/printf/puts/getchar/putchar 등 C의 입출력 방식을 사용하면...","categories": ["Baekjoon"],
        "tags": ["Baekjoon"],
        "url": "/baekjoon/bj-15552/",
        "teaser": null
      },{
        "title": "[백준] 2741",
        "excerpt":"문제 자연수 N이 주어졌을 때, 1부터 N까지 한 줄에 하나씩 출력하는 프로그램을 작성하시오. 입력 첫째 줄에 100,000보다 작거나 같은 자연수 N이 주어진다. 출력 첫째 줄부터 N번째 줄 까지 차례대로 출력한다. 코드 import java.util.*; public class Main{ public static void main(String args[]){ Scanner sc = new Scanner(System.in); int a; a =...","categories": ["Baekjoon"],
        "tags": ["Baekjoon"],
        "url": "/baekjoon/bj-2741/",
        "teaser": null
      },{
        "title": "[백준] 2742",
        "excerpt":"문제 자연수 N이 주어졌을 때, N부터 1까지 한 줄에 하나씩 출력하는 프로그램을 작성하시오. 입력 첫째 줄에 100,000보다 작거나 같은 자연수 N이 주어진다. 출력 첫째 줄부터 N번째 줄 까지 차례대로 출력한다. 코드 import java.util.*; public class Main{ public static void main(String args[]){ Scanner sc = new Scanner(System.in); int a; a =...","categories": ["Baekjoon"],
        "tags": ["Baekjoon"],
        "url": "/baekjoon/bj-2742/",
        "teaser": null
      },{
        "title": "[백준] 11021",
        "excerpt":"문제 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오. 입력 첫째 줄에 테스트 케이스의 개수 T가 주어진다. 각 테스트 케이스는 한 줄로 이루어져 있으며, 각 줄에 A와 B가 주어진다. (0 &lt; A, B &lt; 10) 출력 각 테스트 케이스마다 “Case #x: “를 출력한 다음, A+B를 출력한다. 테스트 케이스...","categories": ["Baekjoon"],
        "tags": ["Baekjoon"],
        "url": "/baekjoon/bj-11021/",
        "teaser": null
      },{
        "title": "[백준] 11022",
        "excerpt":"문제 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오. 입력 첫째 줄에 테스트 케이스의 개수 T가 주어진다. 각 테스트 케이스는 한 줄로 이루어져 있으며, 각 줄에 A와 B가 주어진다. (0 &lt; A, B &lt; 10) 출력 각 테스트 케이스마다 “Case #x: A + B = C” 형식으로 출력한다....","categories": ["Baekjoon"],
        "tags": ["Baekjoon"],
        "url": "/baekjoon/bj-11022/",
        "teaser": null
      },{
        "title": "[백준] 2438",
        "excerpt":"문제 첫째 줄에는 별 1개, 둘째 줄에는 별 2개, N번째 줄에는 별 N개를 찍는 문제 입력 첫째 줄에 N(1 ≤ N ≤ 100)이 주어진다. 출력 첫째 줄부터 N번째 줄까지 차례대로 별을 출력한다. 코드 import java.util.*; public class Main{ public static void main(String args[]){ Scanner sc = new Scanner(System.in); int t;...","categories": ["Baekjoon"],
        "tags": ["Baekjoon"],
        "url": "/baekjoon/bj-2438/",
        "teaser": null
      },{
        "title": "[백준] 2439",
        "excerpt":"문제 첫째 줄에는 별 1개, 둘째 줄에는 별 2개, N번째 줄에는 별 N개를 찍는 문제 하지만, 오른쪽을 기준으로 정렬한 별(예제 참고)을 출력하시오. 입력 첫째 줄에 N(1 ≤ N ≤ 100)이 주어진다. 출력 첫째 줄부터 N번째 줄까지 차례대로 별을 출력한다. 코드 import java.util.*; public class Main{ public static void main(String args[]){...","categories": ["Baekjoon"],
        "tags": ["Baekjoon"],
        "url": "/baekjoon/bj-2439/",
        "teaser": null
      },{
        "title": "[백준] 10871",
        "excerpt":"문제 정수 N개로 이루어진 수열 A와 정수 X가 주어진다. 이때, A에서 X보다 작은 수를 모두 출력하는 프로그램을 작성하시오. 입력 첫째 줄에 N과 X가 주어진다. (1 ≤ N, X ≤ 10,000) 둘째 줄에 수열 A를 이루는 정수 N개가 주어진다. 주어지는 정수는 모두 1보다 크거나 같고, 10,000보다 작거나 같은 정수이다. 출력 X보다...","categories": ["Baekjoon"],
        "tags": ["Baekjoon"],
        "url": "/baekjoon/bj-10871/",
        "teaser": null
      },{
        "title": "[백준] 10952",
        "excerpt":"문제 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오. 입력 입력은 여러 개의 테스트 케이스로 이루어져 있다. 각 테스트 케이스는 한 줄로 이루어져 있으며, 각 줄에 A와 B가 주어진다. (0 &lt; A, B &lt; 10) 입력의 마지막에는 0 두 개가 들어온다. 출력 각 테스트 케이스마다 A+B를 출력한다. 코드...","categories": ["Baekjoon"],
        "tags": ["Baekjoon"],
        "url": "/baekjoon/bj-10952/",
        "teaser": null
      },{
        "title": "[백준] 10951",
        "excerpt":"문제 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오. 입력 입력은 여러 개의 테스트 케이스로 이루어져 있다. 각 테스트 케이스는 한 줄로 이루어져 있으며, 각 줄에 A와 B가 주어진다. (0 &lt; A, B &lt; 10) 출력 각 테스트 케이스마다 A+B를 출력한다. 코드 import java.util.*; public class Main{ public...","categories": ["Baekjoon"],
        "tags": ["Baekjoon"],
        "url": "/baekjoon/bj-10951/",
        "teaser": null
      },{
        "title": "[백준] 1110",
        "excerpt":"문제 0보다 크거나 같고, 99보다 작거나 같은 정수가 주어질 때 다음과 같은 연산을 할 수 있다. 먼저 주어진 수가 10보다 작다면 앞에 0을 붙여 두 자리 수로 만들고, 각 자리의 숫자를 더한다. 그 다음, 주어진 수의 가장 오른쪽 자리 수와 앞에서 구한 합의 가장 오른쪽 자리 수를 이어 붙이면 새로운...","categories": ["Baekjoon"],
        "tags": ["Baekjoon"],
        "url": "/baekjoon/bj-1110/",
        "teaser": null
      },{
        "title": "[백준] 10818",
        "excerpt":"문제 N개의 정수가 주어진다. 이때, 최솟값과 최댓값을 구하는 프로그램을 작성하시오. 입력 첫째 줄에 정수의 개수 N (1 ≤ N ≤ 1,000,000)이 주어진다. 둘째 줄에는 N개의 정수를 공백으로 구분해서 주어진다. 모든 정수는 -1,000,000보다 크거나 같고, 1,000,000보다 작거나 같은 정수이다. 출력 첫째 줄에 주어진 정수 N개의 최솟값과 최댓값을 공백으로 구분해 출력한다. 코드...","categories": ["Baekjoon"],
        "tags": ["Baekjoon"],
        "url": "/baekjoon/bj-10818/",
        "teaser": null
      },{
        "title": "[백준] 2562",
        "excerpt":"문제 9개의 서로 다른 자연수가 주어질 때, 이들 중 최댓값을 찾고 그 최댓값이 몇 번째 수인지를 구하는 프로그램을 작성하시오. 예를 들어, 서로 다른 9개의 자연수 3, 29, 38, 12, 57, 74, 40, 85, 61 이 주어지면, 이들 중 최댓값은 85이고, 이 값은 8번째 수이다. 입력 첫째 줄부터 아홉 번째 줄까지...","categories": ["Baekjoon"],
        "tags": ["Baekjoon"],
        "url": "/baekjoon/bj-2562/",
        "teaser": null
      },{
        "title": "[백준] 2577",
        "excerpt":"문제 세 개의 자연수 A, B, C가 주어질 때 A × B × C를 계산한 결과에 0부터 9까지 각각의 숫자가 몇 번씩 쓰였는지를 구하는 프로그램을 작성하시오. 예를 들어 A = 150, B = 266, C = 427 이라면 A × B × C = 150 × 266 × 427 =...","categories": ["Baekjoon"],
        "tags": ["Baekjoon"],
        "url": "/baekjoon/bj-2577/",
        "teaser": null
      },{
        "title": "[백준] 3052",
        "excerpt":"문제 두 자연수 A와 B가 있을 때, A%B는 A를 B로 나눈 나머지 이다. 예를 들어, 7, 14, 27, 38을 3으로 나눈 나머지는 1, 2, 0, 2이다. 수 10개를 입력받은 뒤, 이를 42로 나눈 나머지를 구한다. 그 다음 서로 다른 값이 몇 개 있는지 출력하는 프로그램을 작성하시오. 입력 첫째 줄부터 열번째...","categories": ["Baekjoon"],
        "tags": ["Baekjoon"],
        "url": "/baekjoon/bj-3052/",
        "teaser": null
      },{
        "title": "[백준] 1546",
        "excerpt":"문제 세준이는 기말고사를 망쳤다. 세준이는 점수를 조작해서 집에 가져가기로 했다. 일단 세준이는 자기 점수 중에 최댓값을 골랐다. 이 값을 M이라고 한다. 그리고 나서 모든 점수를 ‘점수 / M * 100’으로 고쳤다. 예를 들어, 세준이의 최고점이 70이고, 수학점수가 50이었으면 수학점수는 ‘50 / 70 * 100’이 되어 71.43점이 된다. 세준이의 성적을 위의...","categories": ["Baekjoon"],
        "tags": ["Baekjoon"],
        "url": "/baekjoon/bj-1546/",
        "teaser": null
      },{
        "title": "[백준] 8958",
        "excerpt":"문제 “OOXXOXXOOO”와 같은 OX퀴즈의 결과가 있다. O는 문제를 맞은 것이고, X는 문제를 틀린 것이다. 문제를 맞은 경우 그 문제의 점수는 그 문제까지 연속된 O의 개수가 된다. 예를 들어, 10번 문제의 점수는 3이 된다. “OOXXOXXOOO”의 점수는 1+2+0+0+1+0+0+1+2+3 = 10점이다. OX퀴즈의 결과가 주어졌을 때, 점수를 구하는 프로그램을 작성하시오. 입력 첫째 줄에 테스트...","categories": ["Baekjoon"],
        "tags": ["Baekjoon"],
        "url": "/baekjoon/bj-8958/",
        "teaser": null
      },{
        "title": "[백준] 4344",
        "excerpt":"문제 대학생 새내기들의 90%는 자신이 반에서 평균은 넘는다고 생각한다. 당신은 그들에게 슬픈 진실을 알려줘야 한다. 입력 첫째 줄에는 테스트 케이스의 개수 C가 주어진다. 둘째 줄부터 각 테스트 케이스마다 학생의 수 N(1 ≤ N ≤ 1000, N은 정수)이 첫 수로 주어지고, 이어서 N명의 점수가 주어진다. 점수는 0보다 크거나 같고, 100보다 작거나...","categories": ["Baekjoon"],
        "tags": ["Baekjoon"],
        "url": "/baekjoon/bj-4344/",
        "teaser": null
      },{
        "title": "[백준] 15596",
        "excerpt":"문제 정수 n개가 주어졌을 때, n개의 합을 구하는 함수를 작성하시오. 작성해야 하는 함수는 다음과 같다. Java: long sum(int[] a); (클래스 이름: Test) a: 합을 구해야 하는 정수 n개가 저장되어 있는 배열 (0 ≤ a[i] ≤ 1,000,000, 1 ≤ n ≤ 3,000,000) 리턴값: a에 포함되어 있는 정수 n개의 합 코드 public...","categories": ["Baekjoon"],
        "tags": ["Baekjoon"],
        "url": "/baekjoon/bj-15596/",
        "teaser": null
      },{
        "title": "[백준] 4673",
        "excerpt":"문제 셀프 넘버는 1949년 인도 수학자 D.R. Kaprekar가 이름 붙였다. 양의 정수 n에 대해서 d(n)을 n과 n의 각 자리수를 더하는 함수라고 정의하자. 예를 들어, d(75) = 75+7+5 = 87이다. 양의 정수 n이 주어졌을 때, 이 수를 시작해서 n, d(n), d(d(n)), d(d(d(n))), …과 같은 무한 수열을 만들 수 있다. 예를 들어,...","categories": ["Baekjoon"],
        "tags": ["Baekjoon"],
        "url": "/baekjoon/bj-4673/",
        "teaser": null
      },{
        "title": "[백준] 11654",
        "excerpt":"문제 알파벳 소문자, 대문자, 숫자 0-9중 하나가 주어졌을 때, 주어진 글자의 아스키 코드값을 출력하는 프로그램을 작성하시오. 입력 알파벳 소문자, 대문자, 숫자 0-9 중 하나가 첫째 줄에 주어진다. 출력 입력으로 주어진 글자의 아스키 코드 값을 출력한다. 코드 import java.util.*; public class Main{ public static void main(String args[]){ Scanner sc = new...","categories": ["Baekjoon"],
        "tags": ["Baekjoon"],
        "url": "/baekjoon/bj-11654/",
        "teaser": null
      },{
        "title": "[백준] 11720",
        "excerpt":"문제 N개의 숫자가 공백 없이 쓰여있다. 이 숫자를 모두 합해서 출력하는 프로그램을 작성하시오. 입력 첫째 줄에 숫자의 개수 N (1 ≤ N ≤ 100)이 주어진다. 둘째 줄에 숫자 N개가 공백없이 주어진다. 출력 입력으로 주어진 숫자 N개의 합을 출력한다. 코드 import java.util.*; public class Main{ public static void main(String args[]){ Scanner...","categories": ["Baekjoon"],
        "tags": ["Baekjoon"],
        "url": "/baekjoon/bj-11720/",
        "teaser": null
      }]
