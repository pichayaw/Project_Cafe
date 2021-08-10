<template>
    <div>
        <h3>Date</h3>
        <template>
            <v-row>
                <v-col cols="4">
                    <v-date-picker
                        header-color="black"
                        v-model="dates"
                        range
                    ></v-date-picker>
                </v-col>

                <v-col>
                    <v-card>
                        <v-tabs
                            v-model="tab"
                        >
                        <v-tab v-for="item in items" :key="item.tab">
                            {{ item.tab }}
                        </v-tab>
                        </v-tabs>

                        <v-tabs-items v-model="tab">
                            <v-tab-item v-for="item in items" :key="item.tab">
                                
                            </v-tab-item>
                        </v-tabs-items>
                    </v-card>
                </v-col>
            </v-row>
        </template>
        
    </div>
</template>

<script>
import moment from 'moment'
export default {

    data() {
        return {
            dates: ["2021-07-1", this.getToday()],
            tab: null,
            items: [
                { tab: "Get Diamonds", content: "GetDiamonds"},
                { tab: "Earn Diamonds", content: "EarnDiamonds"}
            ]
        }
    },

    methods: {
        getToday() {
            return moment(new Date()).format("YYYY-MM-DD")
        }
    }

}
</script>

<style>

</style>