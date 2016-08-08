function linkedList(){
	this.head = null;

	//base node
	function node(val){
		this.val = val;
		this.next = null;
	}

	// page 59
	this.push = function(val){
		var nn = new node(val);
		if(this.head === null){
			this.head = nn;
		} else {
			runner = this.head;
			while(runner.next){
				runner = runner.next;
			}
			runner.next = nn;
		}
	};

	this.pop = function(){
		var node = this.front();
		if(node){
			this.head = this.head.next;
			return node;
		} else { return null }
	};

	this.front = function(){
		if(this.head){
			var node = this.head;
			return node;
		} else {
			return null;
		}
	};

	this.contains = function(val){
		runner = this.head;
		while(runner){
			if(runner.val === val){
				return true;
			}
			runner = runner.next;
		}
		return false;
	};

	// page 60
	this.listLen = function(){
		runner = this.head;
		var listLength = 0;
		while(runner){
			listLength += 1;
			runner = runner.next;
		}
		return listLength;

	};

	this.max = function(){
		var runner = this.head;
		var max = runner.val;

		while(runner){
			if(runner.val > max){
				max = runner.val;
			}
			runner = runner.next;
		}
		return max;
	};

	this.printOut = function(){

		runner = this.head;

		while(runner){
			console.log(runner.val);
			runner = runner.next;
		}
	};

	this.average = function(){
		var runner = this.head;
		var sum = 0;
		while(runner){
			sum += runner.val;
			runner = runner.next;
		}
		return sum / this.listLen();
	};

	//page 61
	this.back = function(){
		runner = this.head;
		while(runner.next){
			runner = runner.next;
		}
		return runner.val;
	};

	this.removeBack = function(){
		runner = this.head;
		if(!runner.next){
			this.head = null;
			return;
		}
		while(runner.next.next){
			runner = runner.next;
		}
		runner.next = null;
		return;
	};
}

//page 61

function moveMinToFront(listObj){
	if (listObj.listLen() <= 1){
		return listObj;
	}
	var runner = listObj.head.next;
	var walker = listObj.head
	var min = walker.val
	while(runner.next){
		if(runner.val < min){
			walker.next = runner.next;
			runner.next = listObj.head;
			list.head = runner;
		}
		walker = walker.next;
		runner = runner.next;
	}
	return listObj
}
newlist = new linkedList();
newlist.push(10);
newlist.push(20);
newlist.push(30);
newlist.push(50);
newlist.push(21);
newlist.printOut();
newlist.pop();
newlist.printOut();
newlist.front().val;
newlist.contains(30);
newlist.listLen();
newlist.average();
newlist.removeBack();
newlist.printOut();
