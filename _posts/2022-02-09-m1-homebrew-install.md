---
layout: single
title: "M1 맥북 homebrew 설치방법"
categories: Mac
tag: [M1, Macbook, homebrew, brew]
toc: true
---

![homebrew](https://media.vlpt.us/images/franc/post/12d872d8-479e-40d1-ba92-f5324e60a350/brew.png)

## 1. homebrew 파일 다운받기(붙여넣기)
```terminal
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)
```

## 2. homebrew 설치
1)user_id에 자신의 계정명 넣기

2)아래 두줄 붙여넣기
```terminal
echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> /Users/<user_id>/.zprofile
eval "$(/opt/homebrew/bin/brew shellenv)"
```

## 3. homebrew version 확인
```terminal
brew —version
```