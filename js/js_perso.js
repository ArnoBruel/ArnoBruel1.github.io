//tooltips and popovers
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
});

$(function () {
  $('[data-toggle="popover"]').popover()
});
$('.popover-dismiss').popover({
  trigger: 'focus'
})

// Absorbe les éléments de Team Members
const teamMembers = document.getElementsByClassName('helmet');
const topLeftLegend = document.getElementById('topLeftLegend');
const topRightLegend = document.getElementById('topRightLegend');
const bottomLeftLegend = document.getElementById('bottomLeftLegend');
const bottomRightLegend = document.getElementById('bottomRightLegend');


for (let i in array){
  if (i == 1 || i == 4){
    teamMembers[i].addEventListener('click',bottomRight(event));
    event.stopPropagation();
  }
  if (i == 2 || i == 3){
    teamMembers[i].addEventListener('click',bottomLeft(event));
    event.stopPropagation();
  }
  if (i == 5 || i == 8){
    teamMembers[i].addEventListener('click',topLeft(event));
    event.stopPropagation();
  }
  else {
    teamMembers[i].addEventListener('click',topRight(event));
    event.stopPropagation();
  }
}

const topLeft = (topLeftLegend, topRightLegend, bottomLeftLegend, bottomRightLegend) => {
  topRightLegend.replace('d-block','d-none');
  bottomLeftLegend.replace('d-block','d-none');
  bottomRightLegend.replace('d-block','d-none');
  topLeftLegend.replace('d-none','d-block');
};

const topRight = (topLeftLegend, topRightLegend, bottomLeftLegend, bottomRightLegend) => {
  topLeftLegend.replace('d-block','d-none');
  bottomLeftLegend.replace('d-block','d-none');
  bottomRightLegend.replace('d-block','d-none');
  topRightLegend.replace('d-none','d-block');
};

const bottomLeft = (topLeftLegend, topRightLegend, bottomLeftLegend, bottomRightLegend) => {
  topLeftLegend.replace('d-block','d-none');
  topRightLegend.replace('d-block','d-none');
  bottomRightLegend.replace('d-block','d-none');
  bottomLeftLegend.replace('d-none','d-block');
};

const bottomRight = (topLeftLegend, topRightLegend, bottomLeftLegend, bottomRightLegend) => {
  topLeftLegend.replace('d-block','d-none');
  topRightLegend.replace('d-block','d-none');
  bottomLeftLegend.replace('d-block','d-none');
  bottomRightLegend.replace('d-none','d-block');
};
