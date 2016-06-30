

<?php

class obj{
	public function display(){
	
	};
}

class char extends obj {
	function autoload($class) {
		require_once $class.'.php';
	}
	public function __construct() {
		parent::__construct();
	}
}

class letter extends char{
	public function display(){
		echo "Letter: ";
	}
}

class A extends letter{
	public function display(){
		parent::display();
		echo "A";
	}
}

class number extends char{
	public function display(){
		echo "Number: ";
	}
}

class 1 extends number{
	public function display(){
		parent::display();
		echo "A";
	}
}

?>