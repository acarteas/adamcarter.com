<?php
/**
 * @Entity @Table(name="publications")
 **/
class Publication implements JsonSerializable
{
    /** @Id @Column(type="integer") @GeneratedValue **/
    protected $id;

    /** @Column(type="integer") **/
    protected $sort_order;

    /** @Column(type="integer") **/
    protected $year;

    /** @Column(type="string") **/
    protected $type;

    /** @Column(type="string") **/
    protected $citation;

    public function getId()
    {
        return $this->id;
    }

    public function getSortOrder()
    {
        return $this->sort_order;
    }

    public function setSortOrder($order)
    {
        $this->sort_order = $order;
    }

    public function getYear()
    {
        return $this->year;
    }

    public function setYear($year)
    {
        $this->year = $year;
    }

    public function getType()
    {
        return $this->type;
    }
    public function setType($type)
    {
        $this->type = $type;
    }

    public function getCitation()
    {
        return $this->citation;
    }

    public function setCitation($citation)
    {
        $this->citation = $citation;
    }

    public function jsonSerialize() 
    {
        $json = array();
        foreach($this as $key => $value) 
        {
            $json[$key] = $value;
        }
        return $json; // or json_encode($json)
    }
}