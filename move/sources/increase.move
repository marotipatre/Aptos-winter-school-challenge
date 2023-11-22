module increase_add::increase {
    use std::signer;
    
    #[test_only]
    use aptos_framework::account;

    struct Count has key {
        count: u64
    }

  // for intializing counter variable for the specific smart contract

    public entry fun createcounter(account: &signer) {
        let addr = signer::address_of(account);
    
        if (!exists<Count>(addr)) {
            move_to(account, Count { count: 0 });
        }
    }

 /* public entry fun create_list(account: &signer){
  let tasks_holder = TodoList {
    tasks: table::new(),
    set_task_event: account::new_event_handle<Task>(account),
    task_counter: 0
  };
  // move the TodoList resource under the signer account
  move_to(account, tasks_holder);
}*/

   const E_NOT_INITIALIZED: u64 = 1;

// function for raising the counter value 
    public entry fun raise_c(account: &signer) acquires Count {
        let signer_add = signer::address_of(account);
        assert!(exists<Count>(signer_add), E_NOT_INITIALIZED);
        let number_p = borrow_global_mut<Count>(signer_add);
        let counter = number_p.count + 1;
            number_p.count = counter;
    }

    #[test(admin = @0x123)]
    public entry fun test_flow(admin: signer) acquires Count {
        account::create_account_for_test(signer::address_of(&admin));
        createcounter(&admin);
        raise_c(&admin);
    }
    
}