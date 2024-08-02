var userAgent = navigator.userAgent;
var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
var isTablet = /iPad|Android/i.test(userAgent);
var isDesktop = !isMobile && !isTablet;
