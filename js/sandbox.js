var gallery = document.querySelector('.gallery');
var galleryItems = document.querySelectorAll('.gallery-item');
var numOfItems = gallery.children.length;
var itemWidth = 23; // percent: as set in css

var featured = document.querySelector('.featured-item');
var myCustomFlag = true;
var rightBtn = document.querySelector('.move-btn.left');
var leftBtn = document.querySelector('.move-btn.right');
var leftInterval;
var rightInterval;

var scrollRate = 0.2;
var left;

function selectItem(e) {
	if (e.target.classList.contains('active')) return;

	featured.style.backgroundImage = e.target.style.backgroundImage;

	for (var i = 0; i < galleryItems.length; i++) {
		if (galleryItems[i].classList.contains('active'))
			galleryItems[i].classList.remove('active');
	}

	e.target.classList.add('active');
}

function galleryWrapLeft() {
	var first = gallery.children[0];
	gallery.removeChild(first);
	gallery.style.left = -itemWidth + '%';
	gallery.appendChild(first);
	gallery.style.left = '0%';
}

function galleryWrapRight() {
	var last = gallery.children[gallery.children.length - 1];
	gallery.removeChild(last);
	gallery.insertBefore(last, gallery.children[0]);
	gallery.style.left = '-23%';
}

function moveLeft() {
	left = left || 0;

	leftInterval = setInterval(function() {
		gallery.style.left = left + '%';

		if (left > -itemWidth) {
			left -= scrollRate;
		} else {
			left = 0;
			galleryWrapLeft();
		}
	}, 1);
}

function moveRight() {
	//Make sure there is element to the leftd
	if (left > -itemWidth && left < 0) {
		left = left  - itemWidth;

		var last = gallery.children[gallery.children.length - 1];
		gallery.removeChild(last);
		gallery.style.left = left + '%';
		gallery.insertBefore(last, gallery.children[0]);
	}

	left = left || 0;

	leftInterval = setInterval(function() {
		gallery.style.left = left + '%';

		if (left < 0) {
			left += scrollRate;
		} else {
			left = -itemWidth;
			galleryWrapRight();
		}
	}, 1);
}

function stopMovement() {
	clearInterval(leftInterval);
	clearInterval(rightInterval);
}

leftBtn.addEventListener('mouseenter', moveLeft);
leftBtn.addEventListener('mouseleave', stopMovement);
rightBtn.addEventListener('mouseenter', moveRight);
rightBtn.addEventListener('mouseleave', stopMovement);


//Start this baby up
(function init() {
	var images = [
    'Assets/Other/WebsiteCommittee.jpg',
    'Assets/Gallery/IMG_1857.jpg',
    'Assets/Gallery/IMG_2310.jpg',
    'Assets/Gallery/IMG_2311.jpg',
    'Assets/Gallery/IMG_6644_copy.jpg',
    'Assets/Gallery/125972804_802201627030397_2781556200883339749_n.jpg',
    'Assets/Gallery/166399938_137245085006051_6841975232254666445_n.jpg',
    'Assets/Gallery/168460454_137245065006053_4057696442337766586_n.jpg',
    'Assets/Gallery/29104362_228743871019356_8510220510087348224_n.jpg',
    'Assets/Gallery/29258487_230750097485400_4795925138874826752_n.jpg',
    'Assets/Gallery/29313479_230750100818733_4935979461142118400_n.jpg',
    'Assets/Gallery/29342836_230750150818728_2740299558457180160_n.jpg',
    'Assets/Gallery/29357105_230750104152066_4195538154557538304_n.jpg',
    'Assets/Gallery/29573155_235575967002813_827720620821544570_n.jpg',
    'Assets/Gallery/36755839_261629084420990_6051814043407089664_n.jpg',
    'Assets/Gallery/36756863_261629101087655_2393296635078639616_n.jpg',
    'Assets/Gallery/36811943_261629044420994_9008524535619649536_n.jpg',
    'Assets/Gallery/36937325_265159694067929_8296131749184798720_n.jpg',
    'Assets/Gallery/36957639_283612945532448_2101746657229012992_n.jpg',
    'Assets/Gallery/37137599_315243819036027_4380884246990946304_n.jpg',
    'Assets/Gallery/40130899_641668736226586_9058219443035997386_n.jpg',
    'Assets/Gallery/40581683_327951841098558_4514206117827444736_n.jpg',
    'Assets/Gallery/40867921_310410242876207_4415598964405960704_n.jpg',
    'Assets/Gallery/41517429_331191664107909_8587597970877186048_n.jpg',
    'Assets/Gallery/42342008_317527835497781_8355351621550473216_n.jpg',
    'Assets/Gallery/42542348_1954604917931536_5113496016392042003_n.jpg',
    'Assets/Gallery/42647648_1935285276552266_148669079032065055_n.jpg',
    'Assets/Gallery/43242489_322906638293234_6049471735747575808_n.jpg',
    'Assets/Gallery/43275652_322906631626568_2090286619331395584_n.jpg',
    'Assets/Gallery/43913420_493403831166364_4235769612698530981_n.jpg',
    'Assets/Gallery/43984931_2276886412557749_1895425203192307979_n.jpg',
    'Assets/Gallery/44633218_330329004217664_7065514917553504256_n.jpg',
    'Assets/Gallery/46161486_577262312725012_5917572082955588614_n.jpg',
    'Assets/Gallery/46230635_774547469561326_8674547324209268738_n.jpg',
    'Assets/Gallery/46853498_635051783577148_6629164621653445552_n.jpg',
    'Assets/Gallery/47091580_166707084302037_4747449597648861111_n.jpg',
    'Assets/Gallery/49330414_285875172074211_6872387721229042980_n.jpg',
    'Assets/Gallery/49751080_2306142166376540_613286171070955320_n.jpg',
    'Assets/Gallery/49815616_593184994476147_7508732656353140206_n.jpg',
    'Assets/Gallery/50713347_563033667496193_4215518507678758276_n.jpg',
    'Assets/Gallery/50799843_240030676875342_1601393280788072224_n.jpg',
    'Assets/Gallery/51570670_413056929429842_4075611406292350639_n.jpg',
    'Assets/Gallery/52715670_1436007139875638_1466526196591478694_n.jpg',
    'Assets/Gallery/56213883_651708071928890_3498938008667499455_n.jpg',
    'Assets/Gallery/56416908_412914622625768_7393457682310496256_n.jpg',
    'Assets/Gallery/56614089_412914765959087_5830836090537246720_n.jpg',
    'Assets/Gallery/56616328_412914355959128_3499105522429198336_n.jpg',
    'Assets/Gallery/56640073_412914965959067_1999068484696276992_n.jpg',
    'Assets/Gallery/56673209_412914425959121_6930763819039850496_n.jpg',
    'Assets/Gallery/56685809_412914569292440_8981466946029486080_n.jpg',
    'Assets/Gallery/56691482_412914415959122_4902319845393039360_n.jpg',
    'Assets/Gallery/56716083_412914252625805_240618000795828224_n.jpg',
    'Assets/Gallery/56764574_412914775959086_7040042166600597504_n.jpg',
    'Assets/Gallery/56781166_412914832625747_9138704109598146560_n.jpg',
    'Assets/Gallery/56798025_412914552625775_12704113829609472_n.jpg',
    'Assets/Gallery/56806360_412914629292434_8718108317467017216_n.jpg',
    'Assets/Gallery/56806451_412915089292388_8336931984286679040_n.jpg',
    'Assets/Gallery/56848090_412914895959074_1587121897705832448_n.jpg',
    'Assets/Gallery/56862291_412914482625782_6791431811487498240_n.jpg',
    'Assets/Gallery/56942600_412914239292473_7109829548300042240_n.jpg',
    'Assets/Gallery/56972062_412914499292447_8803391966940233728_n.jpg',
    'Assets/Gallery/56985483_412914839292413_7221740444525264896_n.jpg',
    'Assets/Gallery/57000835_412914909292406_8911348327862239232_n.jpg',
    'Assets/Gallery/57019598_412914959292401_3953542938138509312_n.jpg',
    'Assets/Gallery/57029095_412914262625804_5910016445453959168_n.jpg',
    'Assets/Gallery/57068589_2334051443293083_4584910995268079231_n.jpg',
    'Assets/Gallery/57200749_412914689292428_8895762922337206272_n.jpg',
    'Assets/Gallery/57213829_412914699292427_8171381555034324992_n.jpg',
    'Assets/Gallery/57511889_373916776799044_2403407305436783123_n.jpg',
    'Assets/Gallery/58724941_2451456708221713_5903033075875008835_n.jpg',
    'Assets/Gallery/59234836_137491520665976_3078032107695857268_n.jpg',
    'Assets/Gallery/59495390_609687966108643_7177026157086546377_n.jpg',
    'Assets/Gallery/61482594_2233239703450817_5519958396986638309_n.jpg',
    'Assets/Gallery/62024641_2198967297082002_1846791362232171441_n.jpg',
    'Assets/Gallery/65912711_169606244079947_5820975435001660346_n.jpg',
    'Assets/Gallery/69169567_128561095156309_2536538714976511054_n.jpg',
    'Assets/Gallery/D0Wp8EqXcAYg5lB.jfif',
    'Assets/Gallery/D3wNAK1XsAA5sQ7.jfif',
    'Assets/Gallery/D3wNAK2WAAE6bsb.jfif',
    'Assets/Gallery/Dfk-Q_7WAAAVZ3w.jfif',
    'Assets/Gallery/DfNgyIQWsAAPgyu.jfif',
    'Assets/Gallery/DgeslRbV4AAp4rs.jfif',
    'Assets/Gallery/Dh83zW9W4AIOA2P.jfif',
    'Assets/Gallery/DhCt37dWkAAjXnZ.jfif',
    'Assets/Gallery/DmSpz4jXcAM-cAt.jfif',
    'Assets/Gallery/download.png',
    'Assets/Gallery/DqSCSNzXQAEEEtQ.jfif',
    'Assets/Gallery/Dz-FJ0LWkAEPs6-.jfif',
    'Assets/Gallery/EAw-VrWWwAAP0d_.jfif',
    'Assets/Gallery/EAw-Yv0WkAAZ2P2.jfif',
    'Assets/Gallery/EETjxlIVUAAzzUA.jfif',
    'Assets/Gallery/EHMITy8WsAAfI2T.jfif',
    'Assets/Gallery/EIFbwUkXUAAcBjH.jfif',
    'Assets/Gallery/ERDC-Met-Repub-Protest.jpg',
    'Assets/Gallery/EwYN7ocXMAE48dd.jfif',
	];

	//Set Initial Featured Image
	window.onload = function () {
    featured.style.backgroundImage = 'url(' + images[0] + ')';
}


	//Set Images for Gallery and Add Event Listeners
	for (var i = 0; i < galleryItems.length; i++) {
		galleryItems[i].style.backgroundImage = 'url(' + images[i] + ')';
		galleryItems[i].addEventListener('click', selectItem);
	}
})();
