import React from 'react';
import {Tab, Text, TabView, Card, Button, Icon} from 'react-native-elements';
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';


const App = () => {
    const [index, setIndex] = React.useState(0);
    return (
            <SafeAreaView style={styles.container}>
                <ScrollView>
                <Tab
                    value={index}
                    onChange={(e) => setIndex(e)}
                    indicatorStyle={{
                        backgroundColor: 'white',
                        height: 3,
                    }}
                    variant="primary"
                >
                    <Tab.Item
                        title="Сatalog"
                        titleStyle={{fontSize: 12}}
                        icon={{name: 'timer', type: 'ionicon', color: 'white'}}
                    />
                    <Tab.Item
                        title="favorite"
                        titleStyle={{fontSize: 12}}
                        icon={{name: 'heart', type: 'ionicon', color: 'white'}}
                    />
                    <Tab.Item
                        title="basket"
                        titleStyle={{fontSize: 12}}
                        icon={{name: 'cart', type: 'ionicon', color: 'white'}}
                    />
                </Tab>

                <TabView value={index} onChange={setIndex} animationType="spring">
                    <TabView.Item>
                        <Card>
                            <Card.Title>Road Bike</Card.Title>
                            <Card.Image
                                style={{padding: 10}}
                                source={{
                                    uri:
                                        'https://surlybikes.com/uploads/bikes/Straggler_BK2125_Background-1200x800.jpg',
                                }}
                            />
                            <Text style={{marginBottom: 15, paddingTop: 15,}}>
                                It's an exciting time to be buying a road bike, regardless of your budget.
                                Never has there been such a choice at every price point. The category has
                                expanded greatly in the last few years, reflecting trends,
                                riding styles and improvements in design and manufacturing.
                            </Text>

                            <Button
                                icon={
                                    <Icon
                                        name="code"
                                        color="#ffffff"
                                        iconStyle={{marginRight: 10}}
                                    />
                                }
                                buttonStyle={{
                                    borderRadius: 50,
                                    marginLeft: 0,
                                    marginRight: 0,
                                    marginBottom: 25,
                                }}
                                title="Buy me 1.000$"
                            />
                            <Card.Title>Mountain bikes</Card.Title>
                            <Card.Image
                                style={{padding: 10}}
                                source={{
                                    uri:
                                        'https://keyassets.timeincuk.net/inspirewp/live/wp-content/uploads/sites/11/2020/03/carbonjack29-2020-antidotebikes-2-1300x867-1.jpg',
                                }}
                            />
                            <Text style={{marginBottom: 15, paddingTop: 15,}}>
                                It's an exciting time to be buying a road bike, regardless of your budget.
                                Never has there been such a choice at every price point. The category has
                                expanded greatly in the last few years, reflecting trends,
                                riding styles and improvements in design and manufacturing.
                            </Text>

                            <Button
                                icon={
                                    <Icon
                                        name="code"
                                        color="#ffffff"
                                        iconStyle={{marginRight: 10}}
                                    />
                                }
                                buttonStyle={{
                                    borderRadius: 50,
                                    marginLeft: 0,
                                    marginRight: 0,
                                    marginBottom: 25,
                                }}
                                title="Buy me 2.500$"
                            />
                            <Card.Title>Electric bikes</Card.Title>
                            <Card.Image
                                style={{padding: 10}}
                                source={{
                                    uri:
                                        'https://www.topgear.com/sites/default/files/images/news-article/carousel/2021/02/f91b35702d59bc62d277e4dc563783b9/dsc07009.jpg?w=976&h=549',
                                }}
                            />
                            <Text style={{marginBottom: 15, paddingTop: 15,}}>
                                It's an exciting time to be buying a road bike, regardless of your budget.
                                Never has there been such a choice at every price point. The category has
                                expanded greatly in the last few years, reflecting trends,
                                riding styles and improvements in design and manufacturing.
                            </Text>

                            <Button
                                icon={
                                    <Icon
                                        name="code"
                                        color="#ffffff"
                                        iconStyle={{marginRight: 10}}
                                    />
                                }
                                buttonStyle={{
                                    borderRadius: 50,
                                    marginLeft: 0,
                                    marginRight: 0,
                                    marginBottom: 25,
                                }}
                                title="Buy me 17.500$"
                            />
                            <Card.Title>Road Bike</Card.Title>
                            <Card.Image
                                style={{padding: 10}}
                                source={{
                                    uri:
                                        'https://mediavektor.org/uploads/shosvelo1.jpg',
                                }}
                            />
                            <Text style={{marginBottom: 15, paddingTop: 15,}}>
                                It's an exciting time to be buying a road bike, regardless of your budget.
                                Never has there been such a choice at every price point. The category has
                                expanded greatly in the last few years, reflecting trends,
                                riding styles and improvements in design and manufacturing.
                            </Text>

                            <Button
                                icon={
                                    <Icon
                                        name="code"
                                        color="#ffffff"
                                        iconStyle={{marginRight: 10}}
                                    />
                                }
                                buttonStyle={{
                                    borderRadius: 50,
                                    marginLeft: 0,
                                    marginRight: 0,
                                    marginBottom: 0,
                                }}
                                title="Buy me 2000$"
                            />
                        </Card>
                    </TabView.Item>
                    <TabView.Item style={{ width: '100%'}}>
                        <Text h1>Favorite</Text>
                    </TabView.Item>
                    <TabView.Item style={{ width: '100%'}}>
                        <Text h1>Basket</Text>
                    </TabView.Item>
                </TabView>
                </ScrollView>
            </SafeAreaView>
    );
};


export default App;

const styles = StyleSheet.create({
    container: {},
    fonts: {
        marginBottom: 8,
    },
    user: {
        flexDirection: 'row',
        marginBottom: 6,
    },
    image: {
        width: 30,
        height: 30,
        marginRight: 10,
    },
    name: {
        fontSize: 16,
        marginTop: 5,
    },
});
