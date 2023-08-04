// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    textColor: string;
    bgColor: string;

    cardBgColor: string;
    plusColor: string;
    minusColor: string;
  }
}

// styled.d.ts 파일은 타입스크립트에서 styled-components의 DefaultTheme에 사용자 지정 프로퍼티를 추가하는 역할을 합니다.
