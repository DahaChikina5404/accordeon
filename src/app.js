const questions = [
    {
        title: 'Что такое Госуслуги?',
        answer: 'Госуслуги — портал, где граждане, организации и ИП могут оформить документы, получить выписки и справки в электронном виде, найти юридически значимую информацию.'
    },
    
    {
        title: 'Как зарегистрироватться на Госуслугах?',
        answer: 'Онлайн через банк — 10 минут, Лично в центре обслуживания — от 15 минут, При помощи номера телефона и электронной почты.'
    },

    {
        title: 'Куда подавать документы для смены ФИО?',
        answer: 'В ЗАГС по месту жительства или регистрации рождения.'
    },

    {
        title: 'Сколько времени занимает регистрация перемены имени?',
        answer: 'Один месяц, если все необходимые документы были выданы отделом ЗАГС, в который вы обратились. Если нужные документы были выданы другими отделами ЗАГС, срок может быть увеличен до трёх месяцев.'
    },

    {
        title: 'Что такое СНИЛС?',
        answer: 'СНИЛС — страховой номер индивидуального лицевого счёта, который присваивается каждому гражданину Социальным фондом (СФР). Страховой номер состоит из 11 цифр и присваивается один раз. Он не меняется даже при утере документов или смене ФИО. СНИЛС используется для пенсионных отчислений, а также для регистрации на Госуслугах и сайтах ведомств. С его помощью можно подавать заявления и получать электронные услуги.'
    },

    {
        title: 'Как оформиить СНИЛС?',
        answer: 'СНИЛС можно оформить у работодателя, на сайте Социального фонда (СФР) или лично в отделении СФР или МФЦ. Страховой номер присваивается один раз и не меняется даже при утере документов или смене ФИО.'
    },

    {
        title: 'Что делать, если СНИЛС утерян?',
        answer: 'СНИЛС не имеет физического носителя — достаточно знать свой номер, поэтому утрата старой пластиковой карточки или распечатки с номером ничем не грозит. Ваши данные хранятся в системе Социального фонда (СФР), а узнать СНИЛС можно разными способами.'
    }
]


// Динамическое добавление объектов из масива

const questionsList = document.getElementById('container__with_questions')

function renderQuestions() {
   
    questions.forEach((question) => {
        questionsList.innerHTML += `

        <div class="my-8 px-2 py-5 bg-indigo-400 border border-solid border-lime-500 rounded-lg flex justify-between items-center">
            <p class="text-2xl">${question.title}</p>
        
            <svg id="open_description" class="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
        
            <svg id="close_description" class="w-8 h-8 rotate-45 hidden duration-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
        </div>
        
        <div id="description" class="my-5 px-2 hidden text-lg">
            <p>${question.answer}</p>
        </div>`
    })
}   

renderQuestions()

const iconOpen = document.getElementById ('open_description') // Открываем и закрываем подробное описание пункта
const iconClose = document.getElementById('close_description')
const answer = document.getElementById('description')

// Вызываем функцию на разворачивание текста
function open() {
    answer.style.display = 'flex'
    iconClose.style.display = 'flex'
    iconOpen.style.display = 'none'
}

function close() {
    answer.style.display = 'none'
    iconClose.style.display = 'none'
    iconOpen.style.display = 'flex'
}
iconOpen.addEventListener('click', open)
iconClose.addEventListener('click', close)