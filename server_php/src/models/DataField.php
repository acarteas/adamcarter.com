<?php
/**
 * @Entity @Table(name="fields")
 **/
class DataField implements JsonSerializable
{
    /** @Id @Column(type="integer") @GeneratedValue **/
    protected $id;

    /** @Column(type="string") **/
    protected $field_name;

    /** @Column(type="string") **/
    protected $field_value;


    public function getId()
    {
        return $this->id;
    }

    public function getFieldName()
    {
        return $this->field_name;
    }

    public function setFieldName($field)
    {
        $this->field_name = $field;
    }

    public function getFieldValue()
    {
        return $this->field_value;
    }

    public function setFieldValue($field_value)
    {
        $this->field_value = $field_value;
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