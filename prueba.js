$(document).ready(() => {

	$(".card").click(function () {

		let items = document.querySelectorAll('.cardActive');

		items.forEach((i) => {
			i.classList.remove('cardActive');
		});

		$(this).toggleClass('cardActive');

	});

	$("#contMenuIcon").click(() => {

		if ($("#menu").marginLeft != 0) {
			$("#contenedorMenu").css({
				'display': 'block'
			});
			setTimeout(function () {
				$("#menu").css({
					'marginLeft': '0'
				});
			}, 100);
		}

	});

	$("#contenedorMenu").click(() => {

		$("#menu").css({
			'marginLeft': '-27%'
		});
		setTimeout(function () {
			$("#contenedorMenu").css({
				'display': 'none'
			});
		}, 250);

	});

	$('#arriba').click(() => {

		$("html, body").animate({
			scrollTop: "0px"
		}, 250);

	});

});

$(window).scroll(() => {

	let scroll = $(this).scrollTop();

	if (scroll >= 190) {
		$("header").css({
			'marginTop': '-192px'
		});
		$("#titulo").css({
			'marginTop': '205px',
			'fontSize': '24px'
		});
		$("#contenedorArriba").css({
			'bottom': '25px'
		});
	} else if (scroll === 0) {
		$("header").css({
			'marginTop': '0'
		});
		$("#titulo").css({
			'marginTop': '160px',
			'fontSize': '56px'
		});
		$("#contenedorArriba").css({
			'bottom': '-70px'
		});
	}

});