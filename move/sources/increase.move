module counter_addr::increase {
    use std::signer;
    
    #[test_only]
    use aptos_framework::account;

    const E_NOT_INITIALIZED: u64 = 1;

    struct Count has key {
        count: u64
    }

    public entry fun createcounter(account: &signer) {
        let addr = signer::address_of(account);
    
        if (!exists<Count>(addr)) {
            move_to(account, Count { count: 0 });
        }
    }

    public entry fun raise_c(account: &signer) acquires Count {
        let signer_address = signer::address_of(account);
        assert!(exists<Count>(signer_address), E_NOT_INITIALIZED);
        let countvar = borrow_global_mut<Count>(signer_address);
        let counter = countvar.count + 1;
        countvar.count = counter;
    }

    #[test(admin = @0x123)]
    public entry fun test_flow(admin: signer) acquires Count {
        account::create_account_for_test(signer::address_of(&admin));
        createcounter(&admin);
        raise_c(&admin);
    }
}