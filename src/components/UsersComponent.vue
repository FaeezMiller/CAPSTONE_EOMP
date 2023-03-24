<template>
    
   
        <h2>Users</h2>
        <div class="table  bg-black text-light text-center">
        <table>
            <thead>
                <tr>
                    <th scope="col">
                        
                        <button class="btn" onclick="sortList()" value="numUp">
                            <b class="sort">Sort:</b>
                            <img src="https://i.postimg.cc/bwn1r7FV/icons8-sort-numeric-up-32.png" />
                        </button>
                    </th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">CellPhone No.</th>
                    <th scope="col">Edit</th>
                    <th scope="col">Delete</th>
                </tr>
            </thead>
            <tbody v-for="user in users" :key="user.userID" class="products-table">
                <tr id="item-row-{{user.userID}}">
                    <th scope="row">{{ user.userID }}</th>
                    <td>{{ user.firstName }} {{ user.lastName }}</td>
                    <td>{{ user.emailAdd }}</td>
                    <td>{{ user.cellphoneNumber }}</td>
                    <td>
                        <button class="btn" data-bs-toggle="modal" data-bs-target="#edit-modal-{{product.prodID}}"
                            id="edit-modal-btn-{{product.prodID}}">
                            <img style="height: 30px" src="https://i.postimg.cc/4NL9WJjS/icons8-edit-row-48.png" />
                        </button>
                    </td>
                    <td>
                        <button class="btn" onclick="itemRemove({{product.ID - 1}})">
                            <img src="https://i.postimg.cc/cLg9B1Fs/icons8-remove-64.png" style="height: 30px" />
                        </button>
                    </td>
                </tr>
            </tbody>

            <tfoot></tfoot>
        </table>
    </div>

   
</template>

<style>
.sort{color: white;}
</style>
  
<script>
export default {
    name: 'UserCRUD',
    computed: {
       
        users() {
            return this.$store.state.users
        },

        
    },
    created() {
        
        this.$store.dispatch('fetchUsers')
    },
};
</script>