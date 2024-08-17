const sentences = [
"안녕하세요, 타자 연습 게임에 오신 것을 환아래는 20자 이상의 문장 100개입니다.",
"아래는 20자 이상의 문장 100개입니다.",
"오늘은 날씨가 맑고 따뜻한 하루입니다.",
"친구와 함께 영화관에 가기로 했습니다.",
"새로운 책을 읽기 시작했는데 매우 흥미롭습니다.",
"주말에는 가족과 함께 소풍을 계획하고 있습니다.",
"커피 한 잔과 함께 여유로운 시간을 보내고 싶습니다.",
"운동은 건강을 유지하는 데 큰 도움이 됩니다.",
"새로운 언어를 배우는 것은 도전이지만 재미있습니다.",
"그림을 그리며 스트레스를 해소하는 방법을 찾았습니다.",
"여행을 다녀온 후에는 항상 새로운 에너지를 얻습니다.",
"맛있는 음식을 만들어 보는 것은 큰 즐거움입니다.",
"매일 아침 일찍 일어나 운동을 하려고 노력합니다.",
"독서의 즐거움은 세상을 더 넓게 바라보게 합니다.",
"음악을 들으며 하루를 마무리하는 것이 좋습니다.",
"가끔은 혼자만의 시간이 필요하다고 느낍니다.",
"새로운 취미를 찾는 것은 삶의 활력을 불어넣습니다.",
"맛있는 디저트를 만들며 창의력을 발휘하고 있습니다.",
"자연 속에서의 산책은 마음을 편안하게 만듭니다.",
"친구들과의 소중한 추억을 간직하고 싶습니다.",
"나만의 정원을 가꾸는 것은 매우 보람차고 즐겁습니다.",
"다양한 문화와 사람들을 만나는 것이 좋습니다.",
"매일 조금씩 목표를 향해 나아가고 있습니다.",
"요리를 배우는 과정에서 많은 것을 배우고 있습니다.",
"새로운 것을 시도하는 것이 나에게 도전이 됩니다.",
"때때로 혼자 있는 시간이 필요하다고 생각합니다.",
"일상 속 작은 행복을 찾아가는 것이 중요합니다.",
"가족과의 저녁 식사는 항상 특별한 순간입니다.",
"사랑하는 사람과의 시간은 언제나 소중합니다.",
"좋은 영화를 보고 난 후에는 항상 감정이 풍부해집니다.",
"매일 아침 일어나는 것이 새로운 시작이라는 생각이 듭니다.",
"친구와의 대화는 언제나 나에게 큰 힘이 됩니다.",
"나만의 작은 공간을 만들어 가는 것이 즐겁습니다.",
"여행을 통해 얻은 경험은 나의 삶을 풍요롭게 합니다.",
"매일 조금씩 나 자신을 발전시키기 위해 노력합니다.",
"새로운 기술을 배우는 것은 언제나 흥미진진합니다.",
"때때로 나 자신에게 솔직해지는 것이 중요합니다.",
"일상에서 벗어나 새로운 환경을 경험하고 싶습니다.",
"감정이 복잡할 때는 글쓰기가 큰 도움이 됩니다.",
"나만의 목표를 설정하고 달성하는 과정이 중요합니다.",
"좋은 음악을 들으며 기분 전환을 하는 것이 좋습니다.",
"삶의 작은 순간들을 소중히 여기고 싶습니다.",
"새로운 친구를 사귀는 것은 언제나 즐거운 일입니다.",
"다양한 음식을 시도해 보는 것은 큰 즐거움입니다.",
"매일의 루틴 속에서도 변화를 주는 것이 필요합니다.",
"나의 꿈을 이루기 위해 끊임없이 노력하고 있습니다.",
"마음의 평화를 찾기 위해 명상을 시작했습니다.",
"소중한 사람들과의 시간을 잊지 않기 위해 노력합니다.",
"매일 조금씩 나의 취향을 발견하는 것이 즐겁습니다.",
"새로운 환경에서의 경험은 나에게 큰 자산이 됩니다.",
"창의적인 활동을 통해 스트레스를 해소하고 있습니다.",
"나의 성장 과정을 기록하며 스스로를 돌아보고 있습니다.",
"좋은 책을 읽는 것은 마음을 풍요롭게 만들어줍니다.",
"매일의 작은 성취가 나를 더욱 발전시켜 줍니다.",
"나 자신을 돌아보는 시간을 가지는 것이 중요합니다.",
"인생의 목표를 세우고 그 목표를 향해 나아가고 있습니다.",
"소중한 추억을 만들기 위해 여행을 떠나고 싶습니다.",
"다양한 사람들과의 만남은 나에게 많은 영감을 줍니다.",
"나의 감정을 솔직하게 표현하는 것이 중요하다고 생각합니다.",
"새로운 도전을 통해 나의 한계를 극복하고 싶습니다.",
"나만의 스타일을 찾아가는 과정이 즐겁습니다.",
"가족과의 시간을 소중히 여기며 추억을 만들고 있습니다.",
"매일 아침의 기분 좋은 루틴이 나를 행복하게 합니다.",
"창의적인 작업은 나에게 큰 만족을 줍니다.",
"나의 목표를 향해 한 걸음 한 걸음 나아가고 있습니다.",
"좋은 친구와의 대화는 언제나 나에게 큰 힘이 됩니다.",
"작은 것에 감사하며 살아가는 것이 행복의 비결입니다.",
"새로운 경험을 통해 나의 시야를 넓히고 있습니다.",
"삶의 작은 기쁨을 찾는 것이 중요하다고 느낍니다.",
"매일의 일상 속에서 행복을 찾아가고 있습니다.",
"나의 꿈을 이루기 위해 끊임없이 노력하고 있습니다.",
"좋은 음악과 함께하는 시간은 언제나 특별합니다.",
"나만의 공간을 가꾸는 것이 큰 즐거움이 됩니다.",
"소중한 사람들과의 추억을 간직하고 싶습니다.",
"새로운 취미를 통해 나 자신을 발견하는 과정이 즐겁습니다.",
"다양한 문화와 사람들을 만나며 배우는 것이 좋습니다.",
"나의 감정을 솔직하게 표현하는 것이 중요하다고 생각합니다.",
"삶의 작은 순간들을 소중히 여기고 싶습니다.",
"매일 조금씩 나의 목표를 향해 나아가고 있습니다.",
"좋은 책 한 권이 나에게 큰 영감을 줍니다.",
"여행은 나에게 새로운 시각을 제공해 줍니다.",
"매일의 루틴 속에서도 변화를 주는 것이 필요합니다.",
"나의 성장 과정을 기록하며 스스로를 돌아보고 있습니다.",
"소중한 사람들과의 시간을 잊지 않기 위해 노력합니다.",
"새로운 기술을 배우는 것은 언제나 흥미진진합니다.",
"매일의 작은 성취가 나를 더욱 발전시켜 줍니다.",
"마음의 평화를 찾기 위해 명상을 시작했습니다.",
"창의적인 활동을 통해 스트레스를 해소하고 있습니다.",
"다양한 음식을 시도해 보는 것은 큰 즐거움입니다.",
"친구와의 대화는 언제나 나에게 큰 힘이 됩니다.",
"인생의 목표를 세우고 그 목표를 향해 나아가고 있습니다.",
"나만의 스타일을 찾아가는 과정이 즐겁습니다.",
"소중한 추억을 만들기 위해 여행을 떠나고 싶습니다.",
"매일 아침의 기분 좋은 루틴이 나를 행복하게 합니다.",
"작은 것에 감사하며 살아가는 것이 행복의 비결입니다.",
"새로운 경험을 통해 나의 시야를 넓히고 있습니다.",
"삶의 작은 기쁨을 찾는 것이 중요하다고 느낍니다.",
"매일의 일상 속에서 행복을 찾아가고 있습니다.",
"좋은 음악과 함께하는 시간은 언제나 특별합니다.",
"나만의 공간을 가꾸는 것이 큰 즐거움이 됩니다.",
"소중한 사람들과의 추억을 간직하고 싶습니다.",
"새로운 취미를 통해 나 자신을 발견하는 과정이 즐겁습니다."

];

let usedSentences = [];
const inputField = document.getElementById('inputField');
const randomSentenceElement = document.getElementById('randomSentence');
const accuracyDisplay = document.getElementById('accuracyDisplay');
const timeDisplay = document.getElementById('timeDisplay');

let currentSentence = '';
let correctCount = 0;
let totalCount = 0;
let startTime = 0;

// 랜덤 문장을 표시하는 함수
function displayRandomSentence() {
    if (sentences.length === usedSentences.length) {
        alert("모든 문장을 다 입력했습니다! 게임을 재시작합니다.");
        usedSentences = [];
    }

    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * sentences.length);
    } while (usedSentences.includes(sentences[randomIndex]));

    currentSentence = sentences[randomIndex];
    randomSentenceElement.textContent = currentSentence;
    resetInputFields();
    startTime = Date.now();
}

// 입력 필드 초기화 함수
function resetInputFields() {
    inputField.value = '';
    accuracyDisplay.textContent = '';
    timeDisplay.textContent = '';
    correctCount = 0;
    totalCount = 0;
}

// 정확도 계산 함수
function calculateAccuracy() {
    return totalCount === 0 ? 0 : (correctCount / totalCount) * 100;
}

// 입력한 문자의 색상 업데이트 함수
function updateDisplayedText(userInput) {
    let displayedText = '';
    for (let i = 0; i < currentSentence.length; i++) {
        if (userInput[i] === currentSentence[i]) {
            displayedText += `<span class="correct">${userInput[i]}</span>`;
        } else if (userInput[i]) {
            displayedText += `<span class="incorrect">${userInput[i]}</span>`;
        } else {
            displayedText += currentSentence[i];
        }
    }
    randomSentenceElement.innerHTML = displayedText;
}

// 입력 필드의 입력 이벤트 처리
inputField.addEventListener('input', function() {
    const userInput = inputField.value;
    correctCount = 0;
    totalCount = currentSentence.length;

    for (let i = 0; i < userInput.length; i++) {
        if (userInput[i] === currentSentence[i]) {
            correctCount++;
        }
    }

    const accuracy = calculateAccuracy();
    accuracyDisplay.textContent = `정확도: ${accuracy.toFixed(2)}%`;
    updateDisplayedText(userInput);
});

// Enter 키로 제출하는 기능
inputField.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // 기본 Enter 동작 방지
        submitSentence(); // 문장 제출 함수 호출
    }
});

// 문장 제출 함수
function submitSentence() {
    if (inputField.value.length > 0) { // 한 글자 이상 입력했을 경우
        const elapsedTime = ((Date.now() - startTime) / 1000).toFixed(2);
        timeDisplay.textContent = `소요 시간: ${elapsedTime}초`;
        usedSentences.push(currentSentence); // 제출한 문장을 사용한 문장 배열에 추가
        displayRandomSentence(); // 다음 문장 표시
    }
}

// 페이지 로드 시 첫 랜덤 문장 표시
displayRandomSentence();
