$(document).ready(function () {

    console.log("Bump....");



    $("#confirm").dialog({
        title: "Submit application?",
        autoOpen: false,
        buttons: [
            {
                text: "Okay",
                icon: "ui-icon-check",
                click: function () {
                    $(this).dialog("close");
                    location.reload();
                }
            },
            {
                text: "Cancel",
                icon: "ui-icon-cancel",
                click: function () {
                    $(this).dialog("close");
                }
            }
        ]
    });
// .on('click.bs.dropdown.data-api', '.dropdown', function (e) { e.stopPropagation() })
//     var waveBtn = (function () {
//         'use strict';
//         var btn = document.querySelectorAll('.wave'),
//             tab = document.querySelector('.tab-bar'),
//             indicator = document.querySelector('.indicator'),
//             indi = 0;
//         indicator.style.marginLeft = indi + 'px';
//
//         for(var i = 0; i < btn.length; i++) {
//             btn[i].onmousedown = function (e) {
//                 var newRound = document.createElement('div'),x,y;
//
//                 newRound.className = 'cercle';
//                 this.appendChild(newRound);
//
//                 x = e.pageX - this.offsetLeft;
//                 y = e.pageY - this.offsetTop;
//
//                 newRound.style.left = x + "px";
//                 newRound.style.top = y + "px";
//                 newRound.className += " anim";
//
//                 indicator.style.marginLeft = indi + (this.dataset.num-1) * 150 + 'px';
//
//                 setTimeout(function() {
//                     newRound.remove();
//                 }, 1200);
//             };
//         }
//     }());
    // picture slide show
    $("#picture > div:gt(0)").hide();

    setInterval(function() {
        $('#picture > div:first')
            .fadeOut(0)
            .next()
            .fadeIn(0)
            .end()
            .appendTo('#picture');
    }, 3000);

    // tab validation and money converter
    $("#testForm0").validate();
    $("#testForm1").validate();
    $("#testForm2").validate();
    $("#testForm3").validate();
    $("#testForm4").validate();

    $("#tabs").tabs({

        disabled: [1, 2, 3, 4],
        active: 0,
        // heightStyle: "fill"

    });

    $("#tab0submit").button();
    $("#tab0submit").click(function () {

        if ($("#testForm0").valid()) {
            $("#tabs").tabs({
                disabled: [0, 2, 3, 4],
                active: 1
            });
        }

    });

    $("#tab1submit").button();
    $("#tab1submit").click(function () {

        if ($("#testForm1").valid()) {
            $("#tabs").tabs({
                disabled: [0, 1, 3, 4],
                active: 2
            });
        }

    });

    $("#tab2submit").button();
    $("#tab2submit").click(function () {

        if ($("#testForm2").valid()) {
            $("#tabs").tabs({
                disabled: [0, 1, 2, 4],
                active: 3
            });
        }

    });

    $("#tab3submit").button();
    $("#tab3submit").click(function () {

        if ($("#testForm3").valid()) {
            $("#tabs").tabs({
                disabled: [0, 1, 2, 3],
                active: 4
            });
        }
    });
    $("#tab4submit").button();
    $("#tab4submit").click(function () {
        if ($("#testForm0").valid()) {

            // bring up a jqueryui confirm dialog
            $("#confirm").dialog("open");
        } else {
            $("#error").dialog("open");
        }
    });

// Show stuff depending on what options were selected
	$("#adventure").selectmenu({
		change: function(event, data) {

			var form = document.getElementById('testForm1');

			if (form.adventure.value === 'Safari') {
				$('#safariselected').show();
			} else if (form.adventure.value === 'Cycling') {
				$('#cyclingselected').show();
			} else {
				$('#skiselected').show();
			}

		}

	});
	$("#beaches").selectmenu({
		change: function(event, data) {
			var form = document.getElementById('testForm1');
			if(form.beaches.value === 'Caribbean') {
				$('#caribbeanselected').show();
			} else if (form.beaches.value === 'Europe') {
				$('#europeselected').show();
			} else {
				$('#usselected').show();
			}
		}
	});
	$("#artistic").selectmenu({
		change: function(event, data) {
			var form = document.getElementById('testForm1');
			if(form.artistic.value === 'European Culture') {
				$('#europeanselected').show();
			} else if (form.artistic.value === 'Asian Culture') {
				$('#asianselected').show();
			} else {
				$('#mayanselected').show();
			}

		}
	});

});

function euroConverter() {
	var elementById = document.getElementById('testForm3');
	elementById.dollar.value = elementById.euro.value * 1.470;
	elementById.pound.value = elementById.euro.value * 0.717;
	elementById.yen.value = elementById.euro.value * 165.192
};

function dollarConverter() {
	var elementById = document.getElementById('testForm3');
	elementById.euro.value = elementById.dollar.value * 0.680;
	elementById.pound.value = elementById.dollar.value * 0.488;
	elementById.yen.value = elementById.dollar.value * 112.36
};


function poundConverter() {
	var elementById = document.getElementById('testForm3');
	elementById.dollar.value = elementById.pound.value * 2.049;
	elementById.euro.value = elementById.pound.value * 1.394;
	elementById.yen.value = elementById.pound.value * 230.27
};

function yenConverter() {
	var elementById = document.getElementById('testForm3');
	elementById.dollar.value = elementById.yen.value * 0.0089;
	elementById.pound.value = elementById.yen.value * 0.00434;
	elementById.euro.value = elementById.yen.value * 0.00605
};