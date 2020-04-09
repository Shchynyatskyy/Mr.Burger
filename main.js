
onepagescroll('div.pages',{
  pageContainer: 'section',     //child elements selector. use if you don't want to use section for page.
  animationType: 'ease-in-out', //determine css3 animation that will run when page changes
                                //ex) 'ease', 'ease-out-in', 'cubic-bezier(0.2, 0.75, 0.5, 1.15)'
  animationTime: 700,           //define how long each page takes to animate, 0 for off
  infinite: true,               //back to the last/first page when you scroll at first/last page
  pagination: false,             //set show or hide pagination element.
  keyboard: true,               //allow up/page-up and down/page-down key for page scroll
  direction: 'vertical'         //determine direction of page scroll. options available are 'vertical' and 'horizontal'
});