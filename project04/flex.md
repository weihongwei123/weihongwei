# flex布局
## flex-direction:设置flex子元素的排列顺序
	row:从右到右
	row-reverse:横向反向
	column:从上到下
	column-reverse:纵向的反向

##	flex-wrap:设置flex子元素是否换行
	nowrap:默认不换行
	wrap:换行
	wrap-reverse:换行并改变顺序

##	justify-content:flex子元素的横向的排列方式
	flex-start：flex子元素在最左边
	flex-end：flex子元素在最右边
	center：flex子元素在正中间
	space-between:平分flex容器
	space-around:平分flex容器,但是每个子元素两边是子元素间距的一半

##	align-content:flex子元素在纵向上排列方式（一般是处理多行）
	flex-start：flex子元素在最上边
	flex-end：flex子元素在最下边
	center：flex子元素在纵向正中间
	space-between:纵向平分flex容器
	space-around:纵向平分flex容器,但是每个子元素两边是子元素间距的一半
	stretch:默认：li将ul划分
		
##	align-items:flex子元素在纵向上的排列方式（一般是处理单行）
	flex-start:flex子元素在最上边
	flex-end:flex子元素在最下边
	center：flex子元素在纵向正中间
	baseline：如弹性盒子元素的行内轴与侧轴为同一条，则该值与'flex-start'等效。其它情况下，该值将参与基线对齐
	stretch：高度100%，宽度自动
 
##  align-self: 针对flex的子元素
	flex-start:flex子元素在最上边
	flex-end:flex子元素在最下边
	center：flex子元素在纵向正中间
	baseline：如弹性盒子元素的行内轴与侧轴为同一条，则该值与'flex-start'等效。其它情况下，该值将参与基线对齐
	stretch：高度100%，宽度自动

##	order:改变顺序