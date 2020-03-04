第一步：前端register.vue向后端发送请求 
	register.vue中 submit方法中的putRequest指定请求的路径为/system/hr/add,请求内容为this.mes(mes为表单中的数据)
第二步：HrController中映射地址为／system/hr/add的方法为addHr(Hr hr),此方法调用第三步中的hrService对象(此处用的是hrService的泛化对象)的addHr	    方法
第三步：hrService对hr的部分属性进行设置，然后调用hrMapper(隐式泛化)的insert方法，此insert方法对应hrMapper.xml中的insert SQL语句，将hr插入到数        据库中

调用流程:Controller(接收请求) => Service对数据进行加工 => Mapper.xml(对数据进行插入)
