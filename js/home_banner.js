var bannerEl = document.querySelector('.banner')
var imageListEl = bannerEl.querySelector('.image-list')
var titleListEl = bannerEl.querySelector('.title-list')

var activeTitleEl = titleListEl.querySelector('.active')
var currentIndex = 0
var previousIndex = 0
var timerID = null

// 监听底部title
titleListEl.onmouseover = function(event) {
	var ItemEl = event.target.parentElement
	if (!ItemEl.classList.contains('item')) return 
	
	var index = Array.from(titleListEl.children).findIndex((item) => {return item == ItemEl})
	previousIndex = currentIndex
	currentIndex = index
	switchBanner()
}

// 定时轮播
startTimer()

bannerEl.onmouseenter = function() {
	clearInterval(timerID)
}
bannerEl.onmouseleave = function() {
	startTimer()
}


// banner 切换函数
function switchBanner() {
	for (var i = 0; i < imageListEl.children.length; i ++ ) {
		var itemEL = imageListEl.children[i]
		
		if (i === currentIndex) { // 当前要展示的imageItem
			itemEL.style.transition = "left 300ms ease"
			itemEL.style.left = '0'
		} else if (i < currentIndex) { // 放到左侧的imageItem
			if (i !== previousIndex) {
				itemEL.style.transition = "none"
			}
			itemEL.style.left = '-100%'
		} else { // 放到右侧的imageItem
			if (i !== previousIndex) {
				itemEL.style.transition =  "none"
			}
			itemEL.style.left = '100%'
		}
	}
	
	
	activeTitleEl.classList.remove('active')
	var currentTitleEl = titleListEl.children[currentIndex]
	currentTitleEl.classList.add('active')
	activeTitleEl = currentTitleEl
}

// 定时器
function startTimer() {
	timerID = setInterval(function() {
		previousIndex = currentIndex;
		currentIndex = (currentIndex + 1) % titleListEl.children.length
		switchBanner()
	}, 3000)
}